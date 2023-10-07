import React from 'react'
import classes from './EmployeeTable.module.css';

export const EmployeeTable = (props) => {
  return ( 
    <table className={classes.tableContainer}>
        <tr className={classes.tableRow}>
            <th className={classes.tableHeader}>ID</th>
            <th className={classes.tableHeader}>Name</th>
            <th className={classes.tableHeader}>Email</th>
            <th className={classes.tableHeader}>Salary</th>
            <th className={classes.tableHeader}>Joining Date</th>
        </tr>
        <tbody>
            {
                // eslint-disable-next-line react/prop-types
                props.employeeDataList.map((employee, index) => {
                    return (
                        <tr className={classes.tableRow} key={index}>
                            <td className={classes.tableData}>{employee.id}</td>
                            <td className={classes.tableData}>{employee.name}</td>
                            <td className={classes.tableData}>{employee.email}</td>
                            <td className={classes.tableData}>${employee.salary}</td>
                            <td className={classes.tableData}>{employee.joinDate}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}
