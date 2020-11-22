import React from 'react';

export default function CustomScale(props) {
    const {notes} = props
    let note_str = ""

    const sort_by_key = (array, key) => {
        return array.sort(function(a, b){
            var x = a[key]; 
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    //Sort notes array based on priority(which notes to play first)
    sort_by_key(notes, 'priority')
    notes.forEach((note, index) => {
        note_str += note.note
        if(index < notes.length - 1) note_str += ", "
    })

    return (
        <div className="list-group">
            <div className="list-group-item d-flex align-items-center">
                <div className="flex-fill pl-3 pr-3">
                    <div><a href="#" className="text-dark font-weight-600">{props.name}</a></div>
                    <div className="text-muted fs-13px">{props.created}</div>
                </div>
                <div className="text-muted fs-13px">{note_str}</div>
            </div>
        </div>
    );
}