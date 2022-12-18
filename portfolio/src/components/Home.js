import * as React from 'react';
import me from '../images/me.jpg'

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
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
        width: 275,
        padding: 50,
    },
    description: {
        fontFamily: "Mukta-Regular",
        fontSize: 60,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
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
                <img style={styles.image} src={me} alt="Zayaan Rahman"/>
            </section>
            <section style={styles.container}>
                <p style={styles.description}>I'm Zayaan. <br/>I am an aspiring software engineer with interests<br/>in web development, computer security,<br/>and operating systems.</p>
            </section>
        </section>
    )
}