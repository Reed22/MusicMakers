import React from 'react';
import ProfileNav from './ProfileNav'
import ProfileInfo from './ProfileInfo'

export default function QuizList(props) {

    return (
        <div className="list-group">
            <div className="list-group-item d-flex align-items-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="50px" className="rounded-sm ml-n2" />
                <div className="flex-fill pl-3 pr-3">
                    <div><a href="#" className="text-dark font-weight-600">Ethel Wilkes</a></div>
                    <div className="text-muted fs-13px">North Raundspic</div>
                </div>
                <a href="#" className="btn btn-outline-primary">Follow</a>
            </div>
        </div>
    );
}