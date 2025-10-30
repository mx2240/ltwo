import React from "react";



const Nav2 = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Spa</div>
            <ul style={styles.navLinks}>
                <li><a href='/Contact' style={styles.link}>Services</a></li>
                <li><a href='/About us' style={styles.link}>Contact</a></li>
                <li><a href='/Login' style={styles.link}>Login</a></li>
                <li>
                    <a href="#signup" style={{ ...styles.link, ...styles.signup }}>
                        Sign Up
                    </a>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#222",
        padding: "0.8rem 2rem",
        color: "#fff",
    },
    logo: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        letterSpacing: "2px",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "1.5rem",
        margin: 0,
        padding: 0,
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "color 0.2s",
    },
    signup: {
        background: "#4f8cff",
        padding: "0.4rem 1rem",
        borderRadius: "20px",
        color: "#fff",
        fontWeight: "bold",
    },
};

export default Nav2;