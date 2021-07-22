import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import NewPost from "./NewPost";
import { themeContext } from "./context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Posts = ({ guest, userInform }) => {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const { theme } = useContext(themeContext);

  const savePosts = () => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  useEffect(() => {
    savePosts();
  }, [value, posts]);

  const changeHandler = ({ target }) => {
    setValue(target.value);
  };

  const clickHandler = () => {
    let today = format(new Date(), "dd.MM.yyyy");
    posts.unshift({ value, status: guest, today, id: uuidv4() });
    setValue("");
  };

  return (
    <div className="posts">
      <div className="posts_add-post">
        <textarea
          className={`posts_textarea ${theme}`}
          onChange={changeHandler}
          value={value}
          placeholder={
            guest ? "Add new post like guest" : "Add new post like user"
          }
        ></textarea>
        <button className={`add_btn ${theme}`} onClick={clickHandler}>
          Add new post
        </button>
      </div>
      <div className={`v-line ${theme}`}></div>
      <ul className={`posts_list ${theme}`}>
        {posts.map((item, index) =>
          item.value && item.value !== " " ? (
            <NewPost
              key={item.id}
              index={index}
              value={item.value}
              posts={posts}
              setPosts={setPosts}
              guest={guest}
              status={item.status}
              nickname={userInform.Nickname}
              today={item.today}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

Posts.propTypes = {
  guest: PropTypes.bool,
  userInform: PropTypes.object,
};

export default Posts;
