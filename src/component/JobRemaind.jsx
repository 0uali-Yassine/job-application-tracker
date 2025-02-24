import React, { useState } from 'react';
import { useGlobalContext } from '../Context';

function JobRemaind() {
  const { DataJobs, setDataJobs } = useGlobalContext();
  const [isEditing, setIsEditing] = useState(false);
  const [company, setCompany] = useState("");
  const [roles, setRoles] = useState("");
  const [dates, setDates] = useState("");
  const [statuss, setStatuss] = useState("");
  const [reminders, setReminders] = useState("");

  const statusColor = Status => {
    switch (Status) {
      case '✅ Applied': return 'table-warning';
      case '🏆 Offer': return 'table-success';
      case '🎤 Interview': return 'table-info';
      case '❌ Reject': return 'table-danger';
      default: return '';
    }
  };

  const deleteJob = (id) => {
    setDataJobs(prev => prev.filter(job => job.id !== id));
  };

  const toggleEditing = () => setIsEditing(prev => !prev);

  const saveChanges = (id) => {
    setIsEditing(false);
    setDataJobs(prev => prev.map(job => 
      job.id === id ? {
        ...job,
        companyName: company || job.companyName,
        Role: roles || job.Role,
        date: dates || job.date,
        Status: statuss || job.Status,
        reminder: reminders || job.reminder
      } : job
    ));
  };

  return (
    <div className='job-remaind-container'>
      <h4 className='text-center'>Edit Jobs</h4>
      <hr />
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Role</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Reminder</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {DataJobs.map((job, index) => {
            const { id, companyName, Role, date, Status, reminder } = job;
            const rowColor = statusColor(Status);

            return (
              <tr key={id} className={rowColor}>
                <td>{index + 1}</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company Name"
                    />
                  ) : companyName}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={roles}
                      onChange={(e) => setRoles(e.target.value)}
                      placeholder="Role"
                    />
                  ) : Role}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="date"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                    />
                  ) : date}
                </td>
                <td>
                  {isEditing ? (
                    <select
                      value={statuss}
                      onChange={(e) => setStatuss(e.target.value)}
                    >
                      <option value="✅ Applied">✅ Applied</option>
                      <option value="🏆 Offer">🏆 Offer</option>
                      <option value="🎤 Interview">🎤 Interview</option>
                      <option value="❌ Reject">❌ Reject</option>
                    </select>
                  ) : Status}
                </td>
                <td>
                  {isEditing ? (
                    <select
                      value={reminders}
                      onChange={(e) => setReminders(e.target.value)}
                    >
                      <option value="🔔 (Upcoming)">🔔 (Upcoming)</option>
                      <option value="✅ (Done)">✅ (Done)</option>
                      <option value="❌ (No Reminder)">❌ (No Reminder)</option>
                    </select>
                  ) : reminder}
                </td>
                <td>
                  {isEditing ? (
                    <button className='btn btn-success' onClick={() => saveChanges(id)}>Save</button>
                  ) : (
                    <button className='btn btn-warning' onClick={toggleEditing}>Edit</button>
                  )}
                  <button className='btn btn-danger' onClick={() => deleteJob(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default JobRemaind;