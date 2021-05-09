import "./styles.css";
import Field from "../Field";
import { useState,useEffect } from "react";
import KnightBoard from "../../utils/KnightBoard";
import stringParser from "../../utils/stringParser";

function GameTable() {
  const fieldHorizontal = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const fieldVertical = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const colors = ["#CFA75A", "#826038"];
  const [selectedField, setSelectedField] = useState("");
  const [path, setPath] = useState([]);
  const [horsePosition, setHorsePosition] = useState("01");
  const [radio, setRadio] = useState("1");
  
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

  return (
    <section className="GameTable">
      <div className="board">{renderField()}</div>
      <div className="button-container">
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
      <label>Posição inicial</label><input type="radio" value="0" onChange={(e) => handleRadio(e)} checked={radio === "0"}/>
      <label>Posição final</label><input type="radio" value="1" onChange={(e) => handleRadio(e)} checked={radio === "1"}/>
      </div>
    </section>
  );
}

export default GameTable;
