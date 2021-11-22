import React from "react";
import { PermMedia , Label, LocationOn , EmojiEmotions } from "@material-ui/icons";
import "./share.css"

export default function MyComponent() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="1.jpeg"/>
                    <input className="shareInput" type="text" placeholder="what's your name?"/>
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue"  className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOn htmlColor="green"  className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="gold"  className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">share</button>
                </div>

            </div>
        </div>
    );
};






