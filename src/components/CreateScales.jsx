import React from 'react';
import {Formik, Field, Form} from 'formik'
import {octaveSetup} from './constants'

export default function CreateScales(props) {

    //Create CheckBox Fields
    const checkFields = octaveSetup.map(key => {
        return (
            <div>
                <label>
                    <Field type="checkbox" name="checked" value={key.note} />
                    {key.note}
                </label>
                <br />
            </div>

        )
    })

    return (
        <Formik
            initialValues={{
                name: "",
                checked: []
            }}
            onSubmit={values => {
                alert(JSON.stringify(values))
            }}
        >
            {
                ({values}) => (
                    <Form>
                        <div id="checkbox-group">Checked</div>
                        <div role="group" aria-labelledby="checkbox-group">
                            {checkFields}
                        </div>
                        <button type="submit">Create</button>
                    </Form>
                )
            }
        </Formik>
    )
}