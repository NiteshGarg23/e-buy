import React from "react"
import Button from '@material-ui/core/Button';
import { auth } from '../../firebase/utils'

// assets
import Image from '../../assets/background.png'

function Home(){

    const handleLogout = (e) => {
        e.preventDefault();
        auth.signOut();
    }

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
            
            <div class="mui--text-center">
                <h1>Welcome to e-buy!</h1>
                <br />
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleLogout}
                >
                    Logout 
                </Button>
            </div>
        </div>
    )
}

export default Home;
