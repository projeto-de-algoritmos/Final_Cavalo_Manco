import lameHorse from "../../assets/lameHorse.svg"
import "./styles.css"
function Header(){
    return(
        <div className="header">
            <img src={lameHorse} alt=""/>
        </div>
    );
}

export default Header