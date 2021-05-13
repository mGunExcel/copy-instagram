import React from 'react';
import './MyInfo.scss';

const MyInfo = (props) => {
    return (
        <div className="MyInfo">
            <div className="profileImage">
                <img className="imageCircle" src={props.userInfo.profileImage} alt=""/>
                <div className="imageCircleBorder"></div>
            </div>

            <div className="profileInfo">
                <div className="userId">
                    <span>{props.userInfo.userId}</span>
                    <input type="button" value="Edit Proflie"/>
                    <input type="button" value="S"/>
                </div>
                <div className="countInfo">
                    <div><span>게시물</span><span className="numbers">623</span></div>
                    <div><span>팔로우</span><span className="numbers">1</span></div>
                    <div><span>팔로워</span><span className="numbers">198K</span></div>
                </div>
                <div className="selfIntroduce">
                    사업의 대표라면 모두 공감하실 겁니다. 불필요한 잡무가 모여 얼마나 내 판단력을 흐리는지요. 30만 원 자동화 프로그램 하나가 매달 300만 원 직원을 대체합니다.
                </div>
            </div>
        </div>
    );
}

export default MyInfo;
