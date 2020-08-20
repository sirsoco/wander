import React from "react";
import "./style.css";

function Form({
  name,
  age,
  career,
  education,
  currentLocation,
  hobbies,
  destination,
  handleInputChange,
  handleFormSubmit
}) {
  return (
    <form className="form-group">
      <div className="Border">
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="What's your name?"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label for="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={age}
            placeholder="Age"
            onClick={handleInputChange}
            required
          />
        </div>
        <div>
          <label for="careerInput">Career</label>
          <input
            type="text"
            class="form-control"
            id="careerInput"
            name="career"
            value={career}
            placeholder="Career"
            onClick={handleInputChange}
            required
          />
        </div>
        <div>
          <label for="educationInput">Education</label>
          <input
            type="text"
            class="form-control"
            id="educationInput"
            name="education"
            value={education}
            placeholder="Education"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label for="locationInput">Current Location</label>
          <input
            type="text"
            class="form-control"
            id="locationInput"
            name="currentLocation"
            value={currentLocation}
            placeholder="Current Location"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label for="adventureInput">Hobbies</label>
          <input
            type="text"
            class="form-control"
            id="adventureInput"
            name="hobbies"
            value={hobbies}
            placeholder="Adventure Type"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label for="destinationInput">Destination</label>
          <input
            type="text"
            class="form-control"
            id="destinationInput"
            name="destination"
            value={destination}
            placeholder="Destination"
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
