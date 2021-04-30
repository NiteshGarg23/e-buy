import React from "react"

// assets
import Image from '../../assets/background.png'

const Home = (props) => {

    const styles = {
        background: {
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            //height: '100vh'
        }
    }

    return(
        <div style={styles.background}>
            
            <div className="mui--text-center">
                <h1>Welcome to e-buy!</h1>
            </div>
        </div>
    )
}

export default Home;
