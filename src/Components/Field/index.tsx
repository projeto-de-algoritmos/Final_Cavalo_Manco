import "./styles.css"
import chessHorse from "../../assets/ChessHorse.png";
interface FieldProps{
    color: string;
    pos: string;
    isSelected: boolean;
    onPress: any;
}
function Field(props: FieldProps){
    const renderContent = ()=>{
        if(props.pos === "A2"){
            return <img src={chessHorse}/>
        }
        else if(props.isSelected){
            return <div className="ball"/> 
        }
        return <></>
    }
    return(
        <div className="field" style={{backgroundColor:props.color}} onClick={props.onPress}>
            {renderContent()}
        </div>
    );
}

export default Field