
import './topBar.css'
import { Search , Person , Chat , Notifications } from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Bob</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search/>
                    <input placeholder='please search for friends,post or vedio' className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg"></img>
            </div>
        </div>
    )
}
