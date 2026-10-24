import About from "./Components/About"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Sign from "./Components/Signup"
import { Contact1 as Ct1,Contact2 as Ct2 } from "./Components/Contact"
import { Demo } from "./Components/Demo"

function App(){
  return(
      <>
          <h1>This is the App page.</h1>
          <Home/>
          <Login/>
          <Sign/>
          <About/>
          <Ct1/>
          <Ct2/>
          <Demo/>
      </>
  )
}
export default App