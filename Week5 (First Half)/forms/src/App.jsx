import './App.css'
import { ControlledForms } from './components/controlled_forms/controlledForms'
import { UncontrolledForms } from './components/uncontrolled_forms/uncontrolledForms'

function App() {

  return (
    <div className='main-container'>
      <h1>CONTROLLED FORMS</h1>
      <ControlledForms />
      <h1>UNCONTROLLED FORMS</h1>
      <UncontrolledForms />
    </div>
  )
}

export default App
