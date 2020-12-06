import React from 'react'
import Button from '@material-ui/core/Button';

const AppleButton = ({children, ...otherProps}) => {
    return(
        <Button {...otherProps}>Sign in with Apple</Button>
    )
}

export default AppleButton;