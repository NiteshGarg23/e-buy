import { auth } from '../../firebase/utils'

export const handleResetPasswordAPI = (email) => {
    const config = {
        url: 'http://localhost:3000/login',
    };

    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
        .then(() => {
            alert("A password reset link has been sent to this email address")
            resolve();
        })
        .catch(() => {
            const err = ["Email not registered with us!"];
            reject(err);
        })
    })
}