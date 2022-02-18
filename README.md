# Wordle Results Page

The purpose of this project is to create a leader board results page for our friends playing wordle. The idea is to
create an easy place for us to paste the results in, claim them, and then post for everyone to see.

Built using React as a framework, and Google Firebase Firestore/Hosting for a database and hosting solution.

We also plan to use Firebase Functions to create an automated daily email of the previous days results, to anyone that
prefers to be included

# To develop

1. First - clone repo, and ensure that environment dependencies are installed 
   1. Node.js 
   2. Firebase tools (google for more information)
            1. Can be installed using
            > npm install -g firebase-tools
2. Open cloned repo - run to install all project dependencies
> npm install
3. CD into the /functions/ directory and rerun npm install.
> npm install


#FIREBASE CONFIG FILE
This file contains the API keys to the firebase project. Now I may be dumb, but I am not stupid -
so I left this file out of the public repo. You can create it yourself if you want, or just reach out to Alex to get the
file.

File belongs at
> wordle_results -> src -> firebase -> "config.js"

And place it along side the auth.js and firestore.js.

# Commands

To locally render the website
> npm start

To deploy:

1. Compile js into an optimized build

> npm run build

2. Deploy onto firebase (you must be authenticated for this)

> firebase deploy

