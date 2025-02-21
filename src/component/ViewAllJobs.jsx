import React from 'react'
import { useGlobalContext } from '../Context'

function ViewAllJobs() {
  const { DataJobs } = useGlobalContext();

  const statusColor = Status => {
    switch (Status) {
      case '✅ Applied':
        return 'table-warning'
      case '🏆 Offer':
        return 'table-success'
      case '🎤 Interview':
        return 'table-info'
      case '❌ Reject':
        return 'table-danger'

      default:
        break;
    }
  }

  return (
    <div>
      <h4 className='text-center'>All Jobs</h4>
      <table class="table   ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Role</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Reminder</th>
          </tr>
        </thead>
        <tbody>
          {
            DataJobs.map((jobs, key) => {
              const { companyName, Status, Role, date,reminder } = jobs;

              const Color = statusColor(Status);

              return <tr key={key} className={Color} >
                <td>{key + 1}</td>
                <td>{companyName}</td>
                <td>{Role}</td>
                <td>{date}</td>
                <td>{Status}</td>
                <td>{reminder}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ViewAllJobs