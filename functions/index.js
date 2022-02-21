const functions = require("firebase-functions");
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');
const {getDocs, query, collection, where, orderBy} = require("firebase/firestore/lite");
const SENDGRID_API_KEY = '';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.dailyEmail = functions.pubsub.schedule('0 7 * * *').timeZone("America/New_York").onRun(async (context) => {
    functions.logger.info("Beginning Run with context: " + context, {structuredData: true});

    sgMail.setApiKey(SENDGRID_API_KEY);

    functions.logger.info("Finding all wordles from yesterday", {structuredData: true});
    const wordle = 243 + (((new Date(new Date().toLocaleDateString()).getTime()) - (new Date("2/17/2022")).getTime()) / (1000 * 3600 * 24)) - 1;

    let wordleResults = await admin.firestore().collection('daily_results').where('wordle', '==', wordle).orderBy('guess', "asc").get()
        .then((result) => {
            let wordleResults = [];

            //If result exists
            if (result !== undefined && result.length !== 0) {
                //For each resulting doc that downloads
                result.forEach((doc) => {
                    //Extract data from doc
                    doc = doc.data();
                    //And create a card for each doc
                    wordleResults.push(this.resultCard(doc));
                });

                return wordleResults
            }
            //Catch firestore errors
        }).catch((error) => {
            console.log(error);
        });

    //If results is empty, do not continue
    if (wordleResults.length === 0) {
        functions.logger.info("No responses found, do not continue to send", {structuredData: true});
        return null;
    }

    functions.logger.info("Finding all Emails", {structuredData: true});
    const emails = ['ahover307@gmail.com'];

    functions.logger.info("Setting up Email", {structuredData: true});
    const msg = {
        to: 'ahover307@gmail.com',
        from: 'ahover307@gmail.com',
        subject: 'The Daily Wordle Report',
        text: 'responses go here',
    }

    functions.logger.info("Sending Email", {structuredData: true});
    sgMail.send(msg).then(() => {
        functions.logger.info("Email sent", {structuredData: true});
    }).catch((error) => {
        functions.logger.error("Email failed to send: " + error, {structuredData: true});
    })
    return null;
});
