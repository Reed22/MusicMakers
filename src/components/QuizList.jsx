import React from 'react';

export default function QuizList(props) {

    return (
        <div className="list-group">
            <div className="list-group-item d-flex align-items-center">
                <div className="flex-fill pl-3 pr-3">
                    <div><a href="#" className="text-dark font-weight-600">Quiz Type</a></div>
                    <div className="text-muted fs-13px">Time Taken</div>
                </div>
                <div className="text-muted fs-13px">Score</div>
            </div>
        </div>
    );
}