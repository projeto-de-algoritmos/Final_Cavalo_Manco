import "./styles.css";
import Button from '@material-ui/core/Button';
import Field from '../Field';



function GameTable(){
    const fieldHorizontal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const fieldVertical = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const colors = ['#CFA75A', '#826038'];

    const getColor = (letter: string, number: string) => {
        const stringNum = letter.charCodeAt(0);
        const numberNum = parseInt(number);
        if((stringNum%2 && numberNum%2)||(stringNum%2 !== 1 && numberNum%2 !== 1))
            return colors[0];
        else
            return colors[1];
    }
    
    const renderField = () => {
        return (
            <div className="column">
                {fieldHorizontal.map((letter)=>(   
                    <div className="row">
                        {fieldVertical.map((number)=><Field key={letter+number} color={getColor(letter, number)}/>)}
                    </div>
                    ))
                }
            </div>   
        )
    }

    return(
        <section className="GameTable">
            <div className="board">
                {renderField()}
            </div>
                <div className="button-container">
                    <button className="start-button"> GERAR CAMINHO </button>
                    <button className="reset-button"> TENTAR NOVAMENTE </button>
                </div>
        </section>
    );
}

export default GameTable