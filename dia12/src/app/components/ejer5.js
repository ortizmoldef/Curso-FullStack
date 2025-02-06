
function Operator(){

    const baseStyle = {
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }

    const primaryStyle = {
        backgroundColor: "blue",
        color: "white"
    }

    const secondaryStyle = {
        backgroundColor: "gray",
        color: "black"
    } 

    return(
        <div style={{ textAlign: "center",marginTop:"20px"}}>
            <button style={{...baseStyle,...primaryStyle}}>
                Boton Primario
            </button>

            <button style={{...baseStyle, ...secondaryStyle, marginLeft: "10px"}}>
                Boton Secundario
            </button>
        </div>
    )
}

export default Operator