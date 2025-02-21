import React from 'react'
import { useGlobalContext } from '../Context';

function AddJobForm() {
    const { setDataJobs, DataJobs } = useGlobalContext();
    console.log(new Date().getTime());


    const inputForm = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const { companyName, Status, Role, date, DateFollow, reminder } = Object.fromEntries(form);

        console.log(companyName, Status, Role, Date);

        setDataJobs(prev => {
            return [...prev, { id: new Date().getTime(), companyName, Status, Role, date, DateFollow, reminder }];
        })

        e.target.reset();

    }

    return (
        <div>
            AddJobForm
            <form onSubmit={e => inputForm(e)} className='container-fluid p-5 d-flex flex-column gap-4'>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Company Name:</span>
                    <input type="text" name='companyName' class="form-control" placeholder="Username" aria-label="eg :Google" aria-describedby="addon-wrapping" required />
                </div>

                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Role:</span>
                    <input type="text" name='Role' class="form-control" placeholder="Username" aria-label="eg: Front-end dev" aria-describedby="addon-wrapping" required />
                </div>

                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Date:</span>
                    <input type="date" name='date' class="form-control" placeholder="Username" aria-label="eg: Front-end dev" aria-describedby="addon-wrapping" required />
                </div>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Follow-up date :</span>
                    <input type="date" name='DateFollow' class="form-control" placeholder="date" aria-label="eg: Front-end dev" aria-describedby="addon-wrapping" required />
                </div>

                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-5'>
                            <select class="form-select" name='Status' aria-label="Default select example">
                                <option selected>Status </option>
                                <option value="✅ Applied">✅ Applied</option>
                                <option value="🏆 Offer">🏆 Offer</option>
                                <option value="🎤 Interview">🎤 Interview</option>
                                <option value="❌ Reject">❌ Reject</option>
                            </select>
                        </div>

                        <div className="col-5">
                            <select class="form-select" name="reminder" aria-label="Default select example">
                                <option selected>Reminder</option>
                                <option value="🔔 (Upcoming)">🔔 (Upcoming)</option>
                                <option value="✅ (Done)">✅ (Done)</option>
                                <option value="❌ (No Reminder)">❌ (No Reminder)</option>
                            </select>
                        </div>

                    </div>

                </div>

                <button class='btn btn-success'>Add This Job</button>

            </form>


        </div>
    )
}

export default AddJobForm;