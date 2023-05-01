import './App.css';
import Navbar from './Navbar.js';
import Classes from './Classes.js';
import useFetch from './useFetch.js';
import Home from "./Home.js"
function App() {
  const {data:duyurular,isPending:isPending2,error:error2} = useFetch("http://localhost:3001/duyurular");
  return (
    <div className="App">
      {duyurular && <Navbar notifications={duyurular}></Navbar>}
      <Home></Home>
    </div>
  );
}

export default App;
