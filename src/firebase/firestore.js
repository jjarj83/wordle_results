import {addDoc, collection, getDocs, getFirestore, query, where} from "firebase/firestore/lite";
import {firebaseApp} from './config'

const db = getFirestore(firebaseApp);
const path = 'daily_results'

async function queryByResults(wordle) {
    return (await getDocs(query(collection(db, path), where('wordle', '==', wordle))));
}


async function uploadResults(user, result, message, wordle, guess) {
    return (await addDoc(collection(db, path), {
        user: user,
        result: result,
        message: message,
        submissionTime: Date.now(),
        wordle: wordle,
        guess: guess
    }));
}

export {queryByResults, uploadResults};
