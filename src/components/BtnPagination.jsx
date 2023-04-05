import React from "react"
const BtnPagination = ({array, page, setPage}) => {
 const result =  array.map(p => {
    return <button onClick={() => {setPage(p)}} className = {page === p ? 'page page_current' : 'page'} key = {p}>{p}</button>
  })
  return(<>
    {result}
    </>
    )
}
export default BtnPagination; 