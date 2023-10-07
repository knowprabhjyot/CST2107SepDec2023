import React, { useState } from 'react'
import classes from './EmployeeForm.module.css';

const EMPTY_STATE = {
    id: 0,
    name: '',
    email: '',
    salary: 0,
    joinDate: new Date()
}

export const EmployeeForm = (props) => {

  const [employeeFormData, setEmployeeFormData ] = useState(EMPTY_STATE);

  const submitEmployeeData = (event) => {
    event.preventDefault();
    console.log(employeeFormData, 'data');
    // eslint-disable-next-line react/prop-types
    props.setData(employeeFormData);
  }

  return (
    <div className={classes.employeeFormContainer}>
        <form onSubmit={submitEmployeeData} className={classes.employeeForm}>
            <div className={classes.formControl}>
                <label className={classes.label}>Employee ID</label>
                <input onChange={(event) => setEmployeeFormData({ ...employeeFormData, id: event.target.value })} value={employeeFormData.id} className={classes.input} type="number" placeholder='Enter Employee ID' required />
            </div>

            <div className={classes.formControl}>
                <label className={classes.label}>Employee Name</label>
                <input onChange={(event) => setEmployeeFormData({ ...employeeFormData, name: event.target.value })} value={employeeFormData.name} className={classes.input} type="text" placeholder='Enter Employee Name' required />
            </div>

            <div className={classes.formControl}>
                <label className={classes.label}>Employee Email</label>
                <input onChange={(event) => setEmployeeFormData({ ...employeeFormData, email: event.target.value })} value={employeeFormData.email} className={classes.input} type="email" placeholder='Enter Employee Email' required />
            </div>

            <div className={classes.formControl}>
                <label className={classes.label}>Employee Salary</label>
                <input onChange={(event) => setEmployeeFormData({ ...employeeFormData, salary: event.target.value })} value={employeeFormData.salary} className={classes.input} type="number" placeholder='Enter Employee Salary' required />
            </div>

            
            <div className={classes.formControl}>
                <label className={classes.label}>Employee Join Date</label>
                <input onChange={(event) => setEmployeeFormData({ ...employeeFormData, joinDate: event.target.value })} value={employeeFormData.joinDate} className={classes.input} type="date" placeholder='Enter Employee Date' required />
            </div>

            <button className={classes.button}>Submit</button>


        </form>
    </div>
  )
}
