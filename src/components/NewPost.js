import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { themeContext } from "./context";

const NewPost = ({
  value,
  status,
  guest,
  nickname,
  today,
  posts,
  setPosts,
  index,
}) => {
  const [editValue, setEditValue] = useState("");
  const [edit, setEdit] = useState(false);
  const itemIndex = index;
  const { theme } = useContext(themeContext);

  const editHandler = () => {
    setEdit(true);
  };

  const changeHandler = ({ target }) => {
    setEditValue(target.value);
  };

  const acceptHandler = () => {
    if (editValue && editValue !== " ") {
      const newPosts = posts.slice();
      newPosts[index] = { value: editValue, status, today };
      setPosts(newPosts);
      setEdit(false);
      setEditValue("");
    }
  };

  const cancelHendler = () => {
    setEdit(false);
    setEditValue("");
  };

  function deleteHandler() {
    setPosts(posts.filter((item, index) => index !== itemIndex));
  }

  return (
    <div className={`post ${theme}`}>
      <div className={status ? "post_img guest" : "post_img user"}></div>
      <div className="post_inform">
        <p className="post_nickname">{status ? "Guest" : nickname}</p>
        {edit ? (
          <div className="post_edit">
            <button className="post_accept" onClick={acceptHandler}>
              ✓
            </button>
            <textarea
              className="post_textarea"
              value={editValue}
              onChange={changeHandler}
            ></textarea>
            <button className="post_cancel" onClick={cancelHendler}>
              ✘
            </button>
          </div>
        ) : (
          <>
            <div className="post_text-container">
              <p className="post_text">{value}</p>
              {guest ? null : status ? null : (
                <>
                  <button className="post__edit-btn" onClick={editHandler}>
                    ✎
                  </button>
                  <button className="post_delete" onClick={deleteHandler}>
                    🗑️
                  </button>
                </>
              )}
            </div>
          </>
        )}
        <p className="post_date">{today}</p>
      </div>
    </div>
  );
};

NewPost.propTypes = {
  value: PropTypes.string,
  status: PropTypes.bool,
  guest: PropTypes.bool,
  nickname: PropTypes.string,
  today: PropTypes.string,
  posts: PropTypes.array,
  setPosts: PropTypes.func,
  index: PropTypes.number,
};

export default NewPost;
