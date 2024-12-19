import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [fullName, setFullName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setFullName(firstName + " " + lastName);
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={onSubmit} className="form-container">
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="First Name" 
            value={firstName} 
            required 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="Last Name" 
            value={lastName} 
            required 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      {fullName && (
          <div>Full Name: {fullName}</div>
      )}
    </div>
  );
}

export default App;
