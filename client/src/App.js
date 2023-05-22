
import './App.css';
import {Route , Routes} from "react-router-dom"
import { useNavigate} from "react-router-dom"
import Home from "./Home"
import Result from './Result';

function App() {
 return (
  <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/result" element = {<Result />} />
  </Routes>
 )
}

export default App;
