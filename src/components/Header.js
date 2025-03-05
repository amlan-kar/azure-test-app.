import React from 'react';

function Header() {
    return (
        <header style={styles.header}>
            <h1>Welcome to Azure React App</h1>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '10px 0',
        textAlign: 'center'
    }
};

export default Header;
