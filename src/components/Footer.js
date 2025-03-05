import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2025 dev by amlan . All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        marginTop: '20px',
        padding: '10px 0',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center'
    }
};

export default Footer;
