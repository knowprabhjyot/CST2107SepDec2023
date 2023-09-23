import './App.css'
import Country from './components/Country'

function App() {  

  return (
    <div>
      <Country countryValue={'US'} cityValue={'LA'} />
      <Country countryValue={'Canada'} cityValue={'Vancouver'} />
      <Country countryValue={'Brazil'} cityValue={'Rio'} />
    </div>
  )
}

export default App
