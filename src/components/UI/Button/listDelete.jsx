import React, {useState} from 'react'
import style from '../../../css/style.css'
const Delete = ({props, post, remove, styleClass}) => {

  return(
    <button className = {styleClass} onClick = {() => remove(post)}>удалить</button>
    )
}
export default Delete