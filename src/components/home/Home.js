import React from "react"
import { useHistory } from "react-router";
import Button from '@material-ui/core/Button';

// assets
import Image from '../../assets/background.png'

function Home(){

    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault();
        history.replace("/login");
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
                <h1>Welcome to Manufac Analytics!</h1>
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
