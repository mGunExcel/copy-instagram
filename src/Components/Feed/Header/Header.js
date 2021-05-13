import React from 'react';
import './Header.scss';
import FeedActionButtons from './Components/FeedActionButtons';
import HoveredUserInfo from './Components/HoveredUserInfo';
import {useHistory} from 'react-router-dom';

const Header = (props) => {
    const history = useHistory()
    const changeParameter = () =>{
        history.push("/profile/" + props.data.userNumber)
        console.log("예이")
    }

    return (
        <div className="Header">
            <span className="userInfo" onClick={changeParameter}>
                <img className ="userImage" src={props.data.profileImage} />
                <span className="userName" >{props.data.userId}</span>
            </span>
            <svg className="button"  height="30" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
            {/* <FeedActionButtons />
            <HoveredUserInfo /> */}
        </div>
    );
}

export default Header;
