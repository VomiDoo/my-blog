import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { themeContext } from "./context";
import { deletePost, editPost } from "../reducers/postSlice";
import { useSelector, useDispatch } from "react-redux";

const NewPost = ({ value, status, guest, nickname, today, index }) => {
  const [editValue, setEditValue] = useState("");
  const [edit, setEdit] = useState(false);
  const { theme } = useContext(themeContext);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const editHandler = () => {
    setEdit(true);
  };

  const changeHandler = ({ target }) => {
    setEditValue(target.value);
  };

  const acceptHandler = () => {
    if (editValue && editValue !== " ") {
      dispatch(editPost({ editValue, index }));
      setEdit(false);
      setEditValue("");
    }
  };

  const cancelHendler = () => {
    setEdit(false);
    setEditValue("");
  };

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
                  <button
                    className="post_delete"
                    onClick={() => dispatch(deletePost(index))}
                  >
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
  index: PropTypes.number,
};

export default NewPost;
