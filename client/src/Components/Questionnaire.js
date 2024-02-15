// components/Questionnaire.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitQuestionnaire, setCurrentQuestionIndex } from '../actions/questionnaireActions';

const Questionnaire = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [photo, setPhoto] = useState(null);

  const currentQuestionIndex = useSelector(state => state.questionnaire.currentQuestionIndex);
  const totalQuestions = 5; // Assuming there are a total of 5 questions
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('dob', dob);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('photo', photo);

    dispatch(submitQuestionnaire(formData));
  };

  const handlePrevious = () => {
    dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <div>{currentQuestionIndex}/{totalQuestions}</div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>
      <div>
        <label>State:</label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
          {/* {state.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))} */}
        </select>
      </div>
      <div>
        <label>Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          {/* {country.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))} */}
        </select>
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handlePrevious}>Previous</button> {/* Button to go back to previous question */}
    </div>
  );
};

export default Questionnaire;
