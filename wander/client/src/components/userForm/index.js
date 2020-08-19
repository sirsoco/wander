import React from 'react'
import "./style.css";

export default function Form(handleInputChange, handleFormSubmit) {

    return (
        <div>
            <div className="Border">
            <form>
                <div class="form-group">
                    <label for="nameInput">Name</label>
                    <input 
                    type="email" 
                    class="form-control" 
                    id="nameInput" 
                    aria-describedby="emailHelp" 
                    placeholder="What's your name?"
                    onClick={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="ageInput">Age</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="ageInput" 
                    placeholder="Age"
                    onClick={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="careerInput">Career</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="careerInput" 
                    placeholder="Career"
                    onClick={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="educationInput">Education</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="educationInput" 
                    placeholder="Education"
                    onClick={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="locationInput">Current Location</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="locationInput" 
                    placeholder="Current Location"
                    onClick={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="destinationInput">Destination</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="destinationInput" 
                    placeholder="Destination"
                    onClick={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="adventureInput">Adventure Type</label>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="adventureInput" 
                    placeholder="Adventure Type"
                    onClick={handleInputChange}
                    />
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}