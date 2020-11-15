import React from 'react';

export default function ProfileInfo(props) {

    return (
        <div className="profile-sidebar">
            <div className="desktop-sticky-top">
                <h4>Name Here</h4>
                <div className="font-weight-600 mb-3 text-muted mt-n2">{props.email}</div>
                <p>
                    Information about User Here. Can be anything related to musical knowledge and level or simply hobbies, career info, etc. For some reason the box shrinks when the description is too small...
                </p>
                <div className="mb-1"><i className="fa fa-map-marker-alt fa-fw text-muted"></i> New York, NY</div>
                <div className="mb-3"><i className="fa fa-link fa-fw text-muted"></i> seantheme.com/studio</div>
                <hr className="mt-4 mb-4" />
            </div>
        </div>
    )
}