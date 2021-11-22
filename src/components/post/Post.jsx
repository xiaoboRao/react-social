import React from "react";
import { MoreVert } from "@material-ui/icons"

import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImage"/>
                        <span className="postUsername">Bob</span>
                        <span className="postDate">10 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">hey it is my first post</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon"/>
                        <img src="/assets/heart.png" alt="" className="likeIcon"/>
                        <span className="postLikeCount">40 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentContext">10 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

