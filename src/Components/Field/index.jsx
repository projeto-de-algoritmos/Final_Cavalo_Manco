import "./styles.css";
import chessHorse from "../../assets/ChessHorse.png";
function Field(props) {
  const renderContent = () => {
    if (props.pos === "01") {
      return <img src={chessHorse} alt=""/>;
    } else if (props.isSelected) {
      return <div className="ball" />;
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
