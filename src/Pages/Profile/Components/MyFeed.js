import React, { useState, useEffect } from 'react';
import './MyFeed.scss';
import Data from '../../../Data';

const MyFeed = (props) => {

    const [contents, setContents] = useState(props.userInfo.contents);
    
    const reRenderNormalImages = () => {
        setContents(props.userInfo.contents)
    }
    const reRenderTaggedImages = () => {
        setContents(props.userInfo.contentsTagged)
    }

    return (
        <div className="MyFeed">
            <div className="thinLine"></div>
            <div className="buttonSizeFrame">
                <div className="feedButtons">
                    <span onClick = {reRenderNormalImages}>🎨POSTS</span>
                    <span onClick = {reRenderTaggedImages}>👍TAGGED</span>
                    <span>🎁SAVED</span>
                    <span >📲IGTV</span>
                </div>
            </div>
            <div className="Feeds">
                {   
                    contents.map((e)=>{return(<div><img className="feedImages" src={e} /></div>)})
                }
            </div>

        </div>
    );
}

export default MyFeed;
