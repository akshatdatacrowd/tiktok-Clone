import { Link } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaGripLinesVertical } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Comments from "./Comments.tsx";

const Fyp = () => {
  const [Liked, setLiked] = useState("False");
  const [Paused, setPaused] = useState("False");
  const [showComments, setshowComments] = useState("False");
  const onLike = () => {
    setLiked(!Liked);
  };
  const onShowComments = () => {
    setshowComments(!showComments);
  };
  const onCloseComments = () => {
    setshowComments("False");
  };
  const onVideoLike = () => {
    setLiked("True");
  };
  const onVideoClick = () => {
    setPaused(!Paused);
    {
      Paused ? myVideo.pause() : myVideo.play();
    }
  };
  return (
    <div className="fyp">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        onClick={onVideoClick}
        onDoubleClick={onVideoLike}
      >
        <source
          src={
            "https://v16-webapp.tiktok.com/679fa290e8f803e5308e57c35321b2a2/6201fe22/video/tos/maliva/tos-maliva-ve-0068c799-us/acf3cfecc51946f097f5ec2a2d8c1d3e/?a=1988&br=2618&bt=1309&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThwGfoDXq&l=202202072322310101920460370A6C2194&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2d2N2c6Zjk3OjMzZzczNEApZmkzOzk1N2U0Nzk4NWY6OWczbGVucjRvcC5gLS1kMS9zc2IuYl5fYzRhMWEwLl5gYmM6Yw%3D%3D&vl=&vr="
          }
          type="video/mp4"
        ></source>
      </video>
      <div className="contenttop">
        <h2>
          <Link to="/">Following </Link>
          <FaGripLinesVertical />
          <Link to="/fyp"> For you</Link>
        </h2>
        <h1 className="searchIcon">
          <Link to="/search">
            <ImSearch />
          </Link>
        </h1>
      </div>
      <div className="contentrightside">
        <h1 onClick={onLike} id="LikeBtn">
          {Liked ? <AiFillHeart color="#FC4F4F" /> : <AiOutlineHeart />}
        </h1>
        <p style={{ fontWeight: "bold" }}>15.6K</p>
        <br />
        <h1 id="CommentsBtn" onClick={onShowComments}>
          <FaRegCommentDots />
        </h1>
        <p style={{ fontWeight: "bold" }}>2000</p>
        <br />
        <h1 id="ShareBtn">
          <FaShare />
        </h1>
        <p style={{ fontWeight: "bold" }}>2000</p>
      </div>

      <div className="contentMiddle">
        {!Paused && (
          <h1 onClick={onVideoClick} id="PauseId">
            <FaPlay size={40} />
          </h1>
        )}
      </div>
      {!showComments && <Comments onCloseComments={onCloseComments} />}
    </div>
  );
};
export default Fyp;
