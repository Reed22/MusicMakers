import React from 'react';

export default function ProfileInfo(props) {

    return (
        <div className="profile-sidebar">
            <div className="desktop-sticky-top">
                <h4>Name Here</h4>
                <div className="font-weight-600 mb-3 text-muted mt-n2">{props.email}</div>
                <span id="profile">
                    User Description Goes Here
                </span>
                <div className="mb-1"><i className="fa fa-map-marker-alt fa-fw text-muted"></i>City, State</div>
                <hr className="mt-4 mb-4" />
            </div>
        </div>
    )
}