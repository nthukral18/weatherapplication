import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Home() {

    const[cityName , setCityName] = useState("");
    const navigate = useNavigate()

    function onChangeHandler(e){
        setCityName(e.target.value)
    }

    async function onSubmitHandler(e){
        try {
            e.preventDefault();
            let API_KEY = "a06f7a0d0fae7926aa6e13224d71923f"
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
             navigate("/result" , {state : res.data})

        }
        catch(err){
            console.log(err);
        }
    }
    return (
    <>
    <div class = "container">
     <div class = "main-part">
       <h1>learn the weather</h1>
       <form class = "form-box" onSubmit = {onSubmitHandler}>
         <label for = "cityInput">City Name</label>
         <input id = "cityInput" type = "text" name = "cityName" value = {cityName} onChange = {onChangeHandler}/>
         <button type = "submit"> Learn </button>

       </form>
     </div>

     <div class="footer">
         <h5>Made by Mertcan Kose</h5>
       </div>
    </div>
    </>
  
 );
    }

    export default Home