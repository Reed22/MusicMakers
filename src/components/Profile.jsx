import React, {useState, useEffect} from 'react';
import ProfileLists from './ProfileLists'
import ProfileInfo from './ProfileInfo'
import QuizList from './QuizList'
import CustomScaleList from './CustomScaleList'

export default function Profile(props) {
    const [list, setList] = useState("Scales")


    return (
        <div className="container">
            <div className="profile">
                <div className="profile-header">
                    <div className="profile-header-cover"></div>
                    <div className="profile-header-content">
                        <ul className="profile-header-tab nav nav-tabs nav-tabs-v2">
                            <li className="nav-item">
                                <a onClick={() => setList("Quiz")} className="nav-link" data-toggle="tab">
                                    <div className="nav-field">Quiz Scores</div>
                                    <div className="nav-value">382</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => setList("Scales")} className="nav-link active" data-toggle="tab">
                                    <div className="nav-field">Custom Scales</div>
                                    <div className="nav-value">5</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="profile-container">
                    <ProfileInfo email={props.location.state.email} />
                    <ProfileLists list={list}/>
                </div>
            </div>
        </div>
    );
}