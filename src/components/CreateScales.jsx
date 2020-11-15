import React from 'react';

export default function CreateScales(props) {

    return (
        <div id="scale-form">
            <h4>Please Name Your Scale and Select 7 of the notes below</h4>
            <form>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Name of Scale" />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> C </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> D flat</label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> D </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> E flat </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> E </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> F </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> G flat</label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> G </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> A flat </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> A </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> B flat </label><br/>
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> B </label><br/>
                    </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
        )
}