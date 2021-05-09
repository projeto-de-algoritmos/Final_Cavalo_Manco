import "./styles.css";
import Field from "../Field";
import { useState } from "react";
import KnightBoard from "../../utils/KnightBoard";
import stringParser from "../../utils/stringParser";

function GameTable() {
  const fieldHorizontal = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const fieldVertical = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const colors = ["#CFA75A", "#826038"];
  const [selectedField, setSelectedField] = useState("");
  const [path, setPath] = useState([]);

  const getColor = (numCol, numRow) => {
    const intRow = parseInt(numCol);
    const intCol = parseInt(numRow);
    if ((intRow % 2 && intCol % 2) || (intRow % 2 !== 1 && intCol % 2 !== 1))
      return colors[0];
    else return colors[1];
  };

  const selectField = (position) => {
    if (position !== "01") {
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
            const x = parseInt(selectedField[0]);
            const y = parseInt(selectedField[1]);
            setPath(stringParser(KnightBoard.bellmanFord(0, 1, x, y)));
          }}
        >
          GERAR CAMINHO
        </button>
        <button className="reset-button" onClick={() => {
          console.log(path);
        }}>
          TENTAR NOVAMENTE
        </button>
      </div>
    </section>
  );
}

export default GameTable;
