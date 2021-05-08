import "./styles.css"

interface FieldProps{
    color: string;
}
function Field(props: FieldProps){
    return(
        <div className="field" style={{backgroundColor:props.color}}>
        </div>
    );
}

export default Field