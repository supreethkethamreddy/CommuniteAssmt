import React, { useState } from 'react';
import './CmsPage.css';

function CmsPage() {
  const [inputValue, setInputValue] = useState('');

  const changeHeader = async (inputValue)=>{
    try {
      const response = await axios.post('http://localhost:5000/api/content/header',inputValue)
      console.log('Successfully updated:', response.data);
      
    } catch (error) {
      console.error('Failed to update:', error);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${inputValue}`);
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
        <button type="submit" className="form-button" onClick={()=>changeHeader}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default CmsPage;
