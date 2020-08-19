import React from 'react'
import css from './Form.css'

export default function Form() {

    return (
        <div>
            <div className="Border">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What's your name?"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Age"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Career</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Career"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Education</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Education"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Current Location</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Current Location"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Destination</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Destination"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Adventure Type</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Adventure Type"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}