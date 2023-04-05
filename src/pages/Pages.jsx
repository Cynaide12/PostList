import React, {useState, useRef, useMemo, useEffect} from 'react'
import PostList from '../components/PostList'
import '../css/style.css'
import PostFilter from '../components/UI/PostFilter'
import MyModal from '../components/UI/MyModal/MyModal'
import { v4 as uuidv4 } from 'uuid';
import { usePosts } from '../hooks/usePosts'
import axios from 'axios'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'
import { getPageCount, getPagesArray } from '../utils/pages'
import { useObserver } from '../hooks/useObserver'
import MySelect from '../components/UI/Select/MySelect'
import MyInput from '../components/MyInput/MyInput'
function Posts(){
	const [filter, setFilter] = useState({sort: '', query : ''})
	const [array, setArray] = useState([])
	const [title, setTitle] = useState('')
	const id = uuidv4()
	const [body, setBody] = useState('')
	const [visible, setVisible] = useState(false)
	const sortedAndSearchedPosts = usePosts(array, filter.query, filter.sort)
	const [totalPage, setTotalPage] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const lastElement = useRef()
	const [fetchPosts, isPostLoading, postError] = useFetching(async() => {
						const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
		params:{
			_limit: limit,
			_page: page
		}
		});
		setArray([...array, ...response.data]);
		const totalCount = response.headers['x-total-count']
		setTotalPage(getPageCount(totalCount, limit))
		}
	)
	useObserver(lastElement, page < totalPage, isPostLoading, () => setPage(page + 1))
	
	function addList(){
	const newList = {
	id,
	title,
	body,
	}
	setTitle('')
	setBody('')
	setArray([...array, newList])
	setVisible(false)
	}
	function remItem(post){
	setArray(
		array.filter(note => note.id !== post.id)
		)
	}

	useEffect(() => {
	fetchPosts(limit)
	}, [limit, page])
	return(
		<>
		<MyModal visible = {visible} setVisible = {setVisible}>
		<MyInput value = {title} onChange = {e => setTitle(e.target.value)}/>
		<MyInput value = {body} onChange = {e => setBody(e.target.value)}/>
		<button onClick = {addList} className = {'remBtn'} style = {{width: 'fit-content'}}>Добавить</button>
		</MyModal>
		<button className = 'addBtn'onClick = {() => setVisible(!visible)}>Создать пользователя</button>
		<hr></hr>
		<div className = 'list-container'>
		<PostFilter 
		filter = {filter}
		setFilter = {setFilter}
		/>
		<MySelect 
		value = {limit}
		onChange = {value => setLimit(value)}
		defaultValue = 'Кол-во элементов на странице'
		options = {[
		{value: 5, name: '5'},
		{value: 10, name: '10'},
		{value: -1, name: 'Все'},
		]}
		/>
		{postError && <h1>{postError}</h1>}
		<div className='page__wrapper'>
		</div>
		{isPostLoading &&
		<Loader />}
		<PostList
		post = {sortedAndSearchedPosts}
		isLoading = {isPostLoading}
		setPost = {setArray}
		remove = {remItem}
		/>
		<div ref = {lastElement}></div>
		</div>
		</>
		)
}
export default Posts