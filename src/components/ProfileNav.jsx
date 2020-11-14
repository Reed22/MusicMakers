import React from 'react';

export default function ProfileNav(props) {

   return (
    <div className="profile-header">
        <div className="profile-header-cover"></div>
        <div className="profile-header-content">
            <ul className="profile-header-tab nav nav-tabs nav-tabs-v2">
                <li className="nav-item">
                    <a href="#profile-post" className="nav-link" data-toggle="tab">
                        <div className="nav-field">Quiz Scores</div>
                        <div className="nav-value">382</div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#profile-followers" className="nav-link active" data-toggle="tab">
                        <div className="nav-field">Custom Scales</div>
                        <div className="nav-value">1.3m</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
   )
}