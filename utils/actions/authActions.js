import app from "../../firebase/firebase"
import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

export const signUp = async(firstName, lastName, email, password) => {
    const auth = getAuth(app);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        const errorCode = error.code;
        let message = "Something went wrong";
        if(errorCode === "auth/email-already-in-use") {
            message = "This email is already in use";
        }
        throw new Error(message);
    }
}