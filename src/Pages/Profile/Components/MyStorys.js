import React from 'react';
import './MyStorys.scss';
import Data from '../../../Data';

const MyStorys = () => {

    return (
        <div className="MyStorys">
            {Data.map((el)=>{
                return(

                <div className="storyImage">
                    <img src={el.profileImage} alt=""/>
                    <div className="storyUserName">{el.userId}</div>
                    <div className="fakeCircle"></div>
                </div>

                )})}
        </div>
    );
}

export default MyStorys;
