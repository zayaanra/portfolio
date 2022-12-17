import * as React from 'react';

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        
    },
    button: {
        fontFamily: "Mukta-Regular",
        fontSize: 20,
        backgroundColor: "#151414",
        color: 'white',
        borderColor: "white",
        borderWidth: 0,
        borderRadius: 100,
        padding: 20
    },
}

export default function Home() {
    return (
        <section style={styles.container}>
            <button style={styles.button} type="button" >contact</button>
            <button style={styles.button} type="button">projects</button>
        </section>
    )
}