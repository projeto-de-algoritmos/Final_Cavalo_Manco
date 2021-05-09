import "./styles.css"
import logo from "../../assets/lameHorse.svg"
import { useHistory } from "react-router-dom";
function HomePage () {
    const history = useHistory();
    return(
    <div className="homeDiv">
        <img src={logo} alt="" className="image"/>
        <button className="button" onClick={()=>{history.push("/chess")}}>Iniciar simulação</button>
    </div>)
}

export default HomePage;