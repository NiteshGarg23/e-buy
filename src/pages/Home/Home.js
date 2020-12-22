import React from "react"
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { signOutUserStart } from '../../redux/User/user.actions'

// assets
import Image from '../../assets/background.png'

const Home = (props) => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
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
            
            <div className="mui--text-center">
                <h1>Welcome to e-buy!</h1>
                <br />
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() => signOut()}
                >
                    Logout 
                </Button>
            </div>
        </div>
    )
}

export default Home;
