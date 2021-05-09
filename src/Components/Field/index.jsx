import "./styles.css";
import chessHorse from "../../assets/ChessHorse.png";
import { useState } from "react";
function Field(props) {
  const [wait, setWait] = useState(true);
  const renderContent = () => {
    if (props.isHorse === true) {
      return <img src={chessHorse} alt="" />;
    } else if (props.isSelected) {
      return <div className="ball" />;
    } else if (props.path.includes(props.pos)) {
      setTimeout(()=>{
        setWait(false)
      }, 1000*(props.timer+1))
      return <div className="redBall" hidden={wait}/>;
    }
    return <></>;
  };
  return (
    <div
      className="field"
      style={{ backgroundColor: props.color }}
      onClick={props.onPress}
    >
      {renderContent()}
    </div>
  );
}

export default Field;
