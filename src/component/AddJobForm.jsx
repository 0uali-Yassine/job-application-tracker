import React from 'react';
import { useGlobalContext } from '../Context';

function AddJobForm() {
  const { setDataJobs, DataJobs } = useGlobalContext();

  const inputForm = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { companyName, Status, Role, date, DateFollow, reminder } = Object.fromEntries(form);
    setDataJobs(prev => [...prev, { id: new Date().getTime(), companyName, Status, Role, date, DateFollow, reminder }]);
    e.target.reset();
  };

  return (
    <div className='add-job-form'>
      <h2 className='form-title'>Add Job Form</h2>
      <form onSubmit={inputForm} className='form-container'>
        {/* Form fields */}
        <div className="form-group">
          <label>Company Name:</label>
          <input type="text" name='companyName' className="form-control" placeholder="e.g., Google" required />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input type="text" name='Role' className="form-control" placeholder="e.g., Front-end Developer" required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name='date' className="form-control" required />
        </div>
        <div className="form-group">
          <label>Follow-up Date:</label>
          <input type="date" name='DateFollow' className="form-control" required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name='Status' className="form-select">
            <option value="✅ Applied">✅ Applied</option>
            <option value="🏆 Offer">🏆 Offer</option>
            <option value="🎤 Interview">🎤 Interview</option>
            <option value="❌ Reject">❌ Reject</option>
          </select>
        </div>
        <div className="form-group">
          <label>Reminder:</label>
          <select name="reminder" className="form-select">
            <option value="🔔 (Upcoming)">🔔 (Upcoming)</option>
            <option value="✅ (Done)">✅ (Done)</option>
            <option value="❌ (No Reminder)">❌ (No Reminder)</option>
          </select>
        </div>
        <button type="submit" className='btn btn-success'>Add This Job</button>
      </form>
    </div>
  );
}

export default AddJobForm;