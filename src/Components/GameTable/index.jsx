import "./styles.css";
import Field from "../Field";
import { useState,useEffect } from "react";
import KnightBoard from "../../utils/KnightBoard";
import stringParser from "../../utils/stringParser";
import Modal from '@material-ui/core/Modal';
import infoIcon from "../../assets/info-icon.svg";
import { makeStyles } from '@material-ui/core/styles';
import {modalText} from "../../assets/text"

function GameTable() {
  const fieldHorizontal = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const fieldVertical = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const colors = ["#CFA75A", "#826038"];
  const [selectedField, setSelectedField] = useState("");
  const [path, setPath] = useState([]);
  const [horsePosition, setHorsePosition] = useState("01");
  const [radio, setRadio] = useState("1");
  const [showModal, setShowModal] = useState(false);
  
  const renderHorsePosition = () => (
    <div >
      <h1 className="positionTitle">Posição atual do cavalo</h1>
      <h2 className="positionText">{letters[parseInt(horsePosition[1])]}{parseInt(horsePosition[0])+1}</h2>
    </div>
  )
  

  useEffect(()=>{
    setPath([])
  }, [horsePosition])

  const getColor = (numCol, numRow) => {
    const intRow = parseInt(numCol);
    const intCol = parseInt(numRow);
    if ((intRow % 2 && intCol % 2) || (intRow % 2 !== 1 && intCol % 2 !== 1))
      return colors[0];
    else return colors[1];
  };

  const handleRadio = (e) => {
    setRadio(e.target.value);
  }

  const selectField = (position) => {
    if (radio === "0" && position!==selectedField) {
      setHorsePosition(position);
    }
    else if(radio === "1" && position!==horsePosition){
      setSelectedField(position);
    }
  };

  const handleOpen = () =>{
    setShowModal(true);
    console.log(true);
  }
  const handleClose = () =>{
    setShowModal(false);
  }
  const renderField = () => {
    return (
      <div className="column">
        {fieldHorizontal.map((numberColumn, index) => (
          <div className="row" key={index}>
            {fieldVertical.map((numberRow) => (
              <Field
                key={numberColumn + numberRow}
                pos={`${numberColumn}${numberRow}`}
                color={getColor(numberColumn, numberRow)}
                isSelected={selectedField === `${numberColumn}${numberRow}`}
                path={path}
                timer={path.indexOf(`${numberColumn}${numberRow}`)}
                isHorse={`${numberColumn}${numberRow}`===horsePosition}
                onPress={() => selectField(`${numberColumn}${numberRow}`)}
              />
            ))}
          </div>
        ))}
      </div>
   
    );
  };

  const body = (
    <div className="modal-container">
      <div className="modal">
        <div className="closeModal">
          <p onClick={handleClose}>X</p>
        </div>
        <div className="modalContent">
          <h2 id="simple-modal-title">Como funciona</h2><br/>
          <p id="simple-modal-description">
          {modalText}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="GameTable">
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
     >
        {body}
      </Modal>
      <div className="board-container">

      </div>
      <div className="board">{renderField()}</div>
      <div className="button-container">
      {renderHorsePosition()}
        <div className="radio-container">
          <div>
            <input type="radio" value="0" onChange={(e) => handleRadio(e)} checked={radio === "0"}/><label>Posição inicial</label>
          </div>
          <div>
            <input type="radio" value="1" onChange={(e) => handleRadio(e)} checked={radio === "1"}/><label>Posição final</label>
          </div>
        </div>

        <button
          className="start-button"
          disabled={!selectedField}
          onClick={() => {            
            setPath(stringParser(
                KnightBoard.bellmanFord(
                    parseInt(horsePosition[0]), 
                    parseInt(horsePosition[1]), 
                    parseInt(selectedField[0]), 
                    parseInt(selectedField[1])
                )
              )
            );
          }}
        >
          GERAR CAMINHO
        </button>
      </div>
        <img src={infoIcon} className="icon" alt="" onClick={handleOpen}/>
    </section>
  );
}

export default GameTable;
