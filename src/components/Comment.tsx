import { AiOutlineHeart } from "react-icons/ai";
import userpic from "./userpic.jpg";
import { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";

const Comment = () => {
  const [Liked, setLiked] = useState('False');
const onLiked = () => {
  setLiked(!Liked);
};


  return (
    <div>
      <div className="CommentContainer">
        <div className="ctUserPic">
          <img src={userpic} alt="" />
        </div>
        <div className="ctCenter">
          <div className="ctCenterUserName">
            <p>akshatagarwal</p>
          </div>
          <div className="ctText">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laboriosam ullam odio autem voluptates mollitia, quia
              quasi!
            </p>
          </div>
        </div>
        <div className="ctLikeCt">
          <p id="ctHeart" onClick={onLiked}>
            {!Liked ?<AiFillHeart color="#FC4F4F" /> :<AiOutlineHeart />}
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Comment;
