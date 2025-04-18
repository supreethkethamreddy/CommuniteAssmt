import React, { useState } from 'react';
import axios from 'axios';
import './CmsPage.css';

function CmsPage() {
  const [inputValue, setInputValue] = useState('');

  const changeHeader = async (inputVal) => {
    try {
      console.log(inputVal);

      // Localhost
      const response = await axios.post('http://localhost:5000/api/content/header', {
        content: inputVal,  // Adjust "content" to match your backend schema
      });

      console.log('Successfully updated:', response.data);
    } catch (error) {
      console.error('Failed to update:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
    await changeHeader(inputValue);
    setInputValue('');
  };

  return (
    <form className="simple-form" onSubmit={handleSubmit}>
      <label htmlFor="userInput" className="form-label">
        Enter Text:
      </label>
      <div className="form-group-inline">
        <input
          type="text"
          id="userInput"
          className="form-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          required
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CmsPage;
