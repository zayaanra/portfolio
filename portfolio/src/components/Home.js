import * as React from 'react';
import me from '../images/me.jpg'

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
    image: {
        borderRadius: 500,
        borderColor: "white",
        width: 200,
        padding: 50,
    }
}

export default function Home() {
    return (
        <section>
            <section style={styles.container}>
                <button style={styles.button} type="button" >contact</button>
                <button style={styles.button} type="button">projects</button>
            </section>
            <section style={styles.container}>
                <img style={styles.image} src={me}></img>
            </section>
        </section>
    )
}