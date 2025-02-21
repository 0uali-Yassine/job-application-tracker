import React, { useState } from 'react'
import { useGlobalContext } from '../Context';

function JobRemaind() {
  const { DataJobs,setDataJobs } = useGlobalContext();
  const [isEditing,setIsEditing] = useState(false);
  const [company,setCompany] = useState("");
  const [roles,setRoles] = useState("");
  const [dates,setDates] = useState("");
  const [statuss,setStatuss] = useState("");
  const [reminders,setReminders] = useState("");


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

  const deletignJob =  (nb)=>{
    setDataJobs(prev =>{
      return prev.filter(job => job.id !== nb);
    })

  } 

  const editing = ()=>{
    setIsEditing(prev => !prev)

  
  }

  const ChangingData = (nb)=>{
    setIsEditing(prev => !prev)

    const CurrentJob = DataJobs.filter(job => job.id == nb);
    
    setDataJobs(prev =>{
      return prev.map(jobs =>{
        if(jobs.id == nb){
          return {
            ...jobs,
            companyName:!company ? CurrentJob[0].companyName : company ,
            Status: !statuss ? CurrentJob[0].Status : statuss,
            Role : !roles ? CurrentJob[0].Role : roles,
            date : !dates ? CurrentJob[0].date : dates,
            reminder : !reminders ? CurrentJob[0].reminder : reminders
          }
        }else{
          return jobs;
        }
      })
    })
  }


  return (
    <div>
      <h4 className='text-center'>Edite</h4>
      <hr />
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
              const { companyName, Status, Role, date, reminder,id} = jobs;

              const Color = statusColor(Status);

              return <tr key={key} className={Color} >
                
                <td>{key + 1}</td>
                <td>
                  {!isEditing && companyName}
                  {
                    isEditing &&
                    <input type="text" onChange={(e)=> setCompany(e.target.value)} value={company} name='companyName' placeholder='Comapany Name...' />
                  }
                </td>
                <td>
                  {!isEditing && Role}
                  {
                    isEditing &&
                    <input type="text" onChange={(e)=> setRoles(e.target.value)} value={roles} name='role' placeholder='Role...' />
                  }
                </td>
                <td>
                  {!isEditing && date}
                  {
                    isEditing &&
                    <input name="date" onChange={(e)=> setDates(e.target.value)} value={dates} type="Date" />
                  }
                </td>
                <td>
                  {!isEditing && Status}
                  {
                    isEditing &&
                  <select class="form-select" onChange={(e)=> setStatuss(e.target.value)} value={statuss} name='Status' aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="✅ Applied">✅ Applied</option>
                    <option value="🏆 Offer">🏆 Offer</option>
                    <option value="🎤 Interview">🎤 Interview</option>
                    <option value="❌ Reject">❌ Reject</option>
                  </select>
                    
                    }
                </td>
                <td>
                  {!isEditing && reminder}
                  {
                    isEditing &&
                  <select class="form-select" onChange={(e)=> setReminders(e.target.value)} value={reminders} name='reminder' aria-label="Default select example">
                    <option>Reminder</option>
                    <option value="🔔 (Upcoming)">🔔 (Upcoming)</option>
                    <option value="✅ (Done)">✅ (Done)</option>
                    <option value="❌ (No Reminder)">❌ (No Reminder)</option>
                  </select>
                    }
                </td>
                <td className='d-flex justify-content-between'>
                  {
                    isEditing ? 
                    <button className='btn btn-secondary' onClick={()=>ChangingData(id)}>Change</button>
                    :
                    <button className='btn btn-secondary' onClick={()=> editing()}>Edite</button>

                  }
                  
                  <button className='btn btn-danger' onClick={()=>deletignJob(id)}>Delete</button>
                </td>

              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default JobRemaind;