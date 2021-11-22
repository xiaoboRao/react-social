import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Bob</b> and <b> other 6 friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="adImg"/>
            </div>
            <h4 className="rightTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                <li className="rightbarFriend">
                    <div className="rightbarProfileContainer">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">
                          Mr Liu
                    </span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileContainer">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">
                          Mr Liu
                    </span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileContainer">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">
                          Mr Liu
                    </span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarProfileContainer">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">
                        Mr Liu
                    </span>
                </li>
            </ul>
        </div>
    )
}
