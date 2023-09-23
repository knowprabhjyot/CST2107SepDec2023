import './App.css'
import Country from './components/Country'

function App() {  

  return (
    <div>
      <Country countryValue={'US'} cityValue={'LA'} imageUrl="https://images.unsplash.com/flagged/photo-1575555201693-7cd442b8023f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" />
      <Country countryValue={'Canada'} cityValue={'Vancouver'} imageUrl="https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2118&q=80" />
      <Country countryValue={'Brazil'} cityValue={'Rio'} imageUrl="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
    </div>
  )
}

export default App
