import React, {useState, useEffect} from 'react';
import ProfileLists from './ProfileLists'
import ProfileInfo from './ProfileInfo'
import UserInfo from './UserInfo.js'
import { Redirect } from 'react-router-dom'
import API from "../apis/API";


export default function Profile(props) {
    const [list, setList] = useState("Scales")
    const [numQuizzes, setNumQuizzes] = useState(null)
    //Grab Number Quizzes
    useEffect(()=> {
        API.instance
        .get(
        "/quizzes/count",
        {
            withCredentials: true
        }
        )
        .then((res) => { 
            setNumQuizzes(res.data[0].NumberOfQuizzes)
        })
        .catch(error => { console.log(error); });
    }, [])

    if(UserInfo.getEmail() === "") 
        return (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { error: "Please Register/Login" }
                }}
            />
        )

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
                                    <div className="nav-value">{numQuizzes}</div>
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
                    <ProfileInfo email={UserInfo.getEmail()} />
                    <ProfileLists list={list}/>
                </div>
            </div>
        </div>
    );
}