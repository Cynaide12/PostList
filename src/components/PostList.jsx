import DelBtn from "./UI/Button/listDelete";
import React, { useState } from "react";
import './../css/style.css'
import {Link} from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
const PostList = ({ props, post, remove, isLoading }) => {
  if (!post.length && !isLoading) {
    return <h2>Посты не найдены!</h2>;
  }
  return (
    <ul>
      <TransitionGroup>
        {post.map(note => 
          <CSSTransition key={note.id} timeout={500} classNames="post">
            <div className="postList">
              <li style = {{width: '100%'}}>
              <strong>{note.id}.<h2>{note.title}</h2></strong>
                {note.body}
              </li>
              <Link className = 'remBtn aLink' to = {`/pages/${note.id}`}>открыть</Link>
              <DelBtn post={note} remove={remove} styleClass="remBtn" />
            </div>
            </CSSTransition>
        )}
      </TransitionGroup>
    </ul>
  );
};
export default PostList;
