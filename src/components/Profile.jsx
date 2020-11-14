import React from 'react';
import ProfileNav from './ProfileNav'
import ProfileInfo from './ProfileInfo'
import QuizList from './QuizList'

export default function Profile(props) {

    return (
        <div className="container">
            <div className="profile">
                <ProfileNav />
                <div className="profile-container">
                  <ProfileInfo email={props.location.state.email} />
                    <div className="profile-content">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tab-content p-0">
                                    <div className="tab-pane fade active show" id="profile-followers">
                                        <QuizList />
                                        <div className="text-center p-3">
                                            <a href="#" className="text-dark text-decoration-none">Show more <b className="caret"></b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}