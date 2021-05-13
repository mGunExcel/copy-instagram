import React , { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Profile.scss';
import GNB from '../../Components/GNB/GNB';
import MyFeed from './Components/MyFeed';
import MyInfo from './Components/MyInfo';
import MyStorys from './Components/MyStorys';
import Data from '../../Data';

const Profile = () => {

  const [userInfo, setUserInfo] = useState();
  const param = useParams();

  useEffect(() => {
    setUserInfo(Data[param.id-1]);
    console.log("이펙트 시작")
    return () => {
    };
  }, []);

  return (
    
    <div className="Profile">
      {/* <GNB /> */}
      <div className="page">
        {userInfo ? <MyInfo userInfo = {userInfo}/> : <div>로딩</div>}
        <MyStorys />
        { userInfo ? <MyFeed userInfo = {userInfo}/> : <div>로딩</div>}
      </div>

    </div>
  );
}

export default Profile;
