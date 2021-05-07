import lameHorse from "../../assets/lameHorse.svg";
import "./styles.css"
function Navbar(){
    return(
        <div className="navbar">
            <div className="header">
                <img src={lameHorse} alt=""/>
            </div>
        </div>
    );
}

export default Navbar