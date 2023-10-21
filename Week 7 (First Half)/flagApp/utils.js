import { AuthErrorCodes } from "firebase/auth"

const getAuthErrorMessages = (errorCode) => {
    switch (errorCode) {
        case AuthErrorCodes.EMAIL_EXISTS:
            return "User already Exists"
        default:
            return "There was an error"
    }
}

export { getAuthErrorMessages }