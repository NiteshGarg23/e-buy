import React from 'react'
import Button from '@material-ui/core/Button';

const GoogleButton = ({children, ...otherProps}) => {
    return(
        <Button {...otherProps}>Sign in with Google</Button>
    )
}

export default GoogleButton;