import { useState } from 'react'
import './App.css'
import { EmployeeForm } from './components/EmployeeForm/EmployeeForm'
import { EmployeeTable } from './components/EmployeeTable/EmployeeTable'

function App() {

  const [employeeDataList, setEmployeeDataList] = useState([]);

  const setEmployeeData = (newEmployeeData) => {
    console.log(newEmployeeData);
    // const newArray = employeeDataList;
    // newArray.push(newEmployeeData);
    // console.log(newArray);
    setEmployeeDataList([...employeeDataList, newEmployeeData]);

  }

  return (
    <div className='employee-container'>
      <EmployeeForm setData={(data) => setEmployeeData(data)} />
      <EmployeeTable employeeDataList={employeeDataList} />
    </div>
  )
}

export default App
