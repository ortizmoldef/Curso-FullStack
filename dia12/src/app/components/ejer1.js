// Ejercicio 1 y 2

function App (){
    const styles = {
        container: {
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#f4f4f4"
        },

        title: {
            color: "blue",
            fontSize: "24px",
        },

        button:{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",

        }
    }
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                HOLA!
            </h1>
            <button style={styles.button}>
                Presiona Aqui
            </button>
        </div>
    )
}

export default App;