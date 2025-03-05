import React from 'react';

function Home() {
    return (
        <main style={styles.main}>
            <h2>Hello from Azure App Service!</h2>
            <p>my simple React app deployed using Azure App Service and GitHub.</p>
        </main>
    );
}

const styles = {
    main: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f0f0f5',
        minHeight: '80vh'
    }
};

export default Home;
