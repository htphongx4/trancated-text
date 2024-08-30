import './App.css'
import { Trancated } from './Trancated'

function App() {
  const shortText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  return (
    <>
      <Trancated text={longText} />
    </>
  )
}

export default App
