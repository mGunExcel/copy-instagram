import React from 'react';
import './Feed.scss';
import Header from './Header/Header';
import Contents from './Contents/Contents';
import Community from './Community/Community';

const Feed = (props) => {
    return (
        <section className="Feed">
            <Header data = {props.data}/>
            <Contents />
            <Community />
        </section>
    );
}

export default Feed;
