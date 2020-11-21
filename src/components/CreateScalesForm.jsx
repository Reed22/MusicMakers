import React from 'react';
import {Formik, Field, Form} from 'formik'
import {octaveSetup} from './constants'
import API from "../apis/API";

export default function CreateScales(props) {

    //Create CheckBox Fields
    const generateCheckFields = (octave) => {
        return octaveSetup.map(key => {
            return (
                <div className="form-check">
                    <label className="form-check-label">
                        <Field className="form-check-input" type="checkbox" name="checked" value={octave + key.note} />
                        {key.note}
                    </label>
                </div>
            )
        })
    }

    return (
        <Formik
            initialValues={{
                name: "",
                checked: []
            }}
            onSubmit={values => {
                API.instance
                .post(
                  "/scales",
                  values,
                  {
                    withCredentials: true,
                  }
                )
                //const post_req = new XMLHttpRequest()
                //post_req.open("POST", "localhost:3001/scales")
                //post_req.send(JSON.stringify(values))
                //Sort check array so that the notes are in order
                //post request to server, add Custom Scale w/ user_id
            }}
        >
            {
                ({values}) => (
                    <Form>
                        <Field type="text" name="name" placeholder="Scale Name" required/>
                        <div id="check-container">
                            <div id="checkbox-group">First Octave</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                {generateCheckFields(1)}
                            </div>
                            <div id="checkbox-group">Second Octave</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                {generateCheckFields(2)}
                            </div>
                        </div>
                        <button type="submit">Create</button>
                    </Form>
                )
            }
        </Formik>
    )
}