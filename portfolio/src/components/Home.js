import React, {useState} from 'react';
import me from '../images/me.jpg'

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    btn1: {
        fontFamily: "Mukta-Regular",
        fontSize: 20,
        backgroundColor: "#151414",
        color: 'white',
        borderWidth: 0,
        padding: 20,
        cursor: 'pointer',
        marginRight: 0,
    },
    btn2: {
        fontFamily: "Mukta-Regular",
        fontSize: 20,
        backgroundColor: "#151414",
        color: 'white',
        borderWidth: 0,
        padding: 20,
        cursor: 'pointer',
        marginLeft: 20
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
                <button style={styles.btn1} type="button">contact</button>
                <button style={styles.btn2} type="button">projects</button>
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