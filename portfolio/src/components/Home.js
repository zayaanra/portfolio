import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown } from 'react-icons/fi';

import me from '../images/me.jpg'
import sorter from '../images/sorter.png'


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
        textDecoration: "underline blue"
    },
    btn2: {
        fontFamily: "Mukta-Regular",
        fontSize: 20,
        backgroundColor: "#151414",
        color: 'white',
        borderWidth: 0,
        padding: 20,
        cursor: 'pointer',
        marginLeft: 20,
        textDecoration: "underline blue"
    },
    pfp: {
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
    },
    subtitle: {
        fontFamily: "Mukta-Regular",
        fontSize: 40,
        color: "white",
        textDecoration: "underline blue"
    },
    projects: {
        flexDirection: "row"
    },
    projectDescrip: {
        fontFamily: "Mukta-Regular",
        fontSize: 28,
        color: "white"
    },
    image: {
        width: 500
    }
}

//<p style={styles.description}>I'm Zayaan. <br/>I am an aspiring software engineer with interests<br/>in web development, computer security,<br/>and operating systems.</p> 

export default function Home() {
    return (
        <section>
            <section style={styles.container}>
                <button style={styles.btn1} type="button">contact</button>
                <button style={styles.btn2} type="button">projects</button>
            </section>
            <section style={styles.container}>
                <img style={styles.pfp} src={me} alt="Zayaan Rahman"/>
            </section>
            <section style={styles.container}>
                <TypeAnimation sequence={["I'm Zayaan. I am an aspiring software engineer with interests in web development, cybersecurity, and operating systems."]} cursor={false} style={styles.description}/>    
            </section>
            <section style={styles.container}>
                <FiArrowDown style={{color:"blue", padding: 100, height: 100, width: 100}}/>
            </section>
            <section style={styles.container}>
                <p style={styles.subtitle}>Projects</p>
            </section>
            <section style={styles.container}>
                <section style={styles.projects}>
                    <img style={styles.image} src={sorter} alt="Sorting Visualizer"/>
                </section>
            </section>
        </section>
    )
}