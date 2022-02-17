// import * as firebaseui from "firebaseui";
// import 'firebaseui/dist/firebaseui.css'
// import {getAuth, GoogleAuthProvider} from "firebase/auth";
// import {Component} from "react";
//
// class UserUnauthenticated extends Component {
//     componentDidMount() {
//         const ui = new firebaseui.auth.AuthUI(getAuth());
//
//         ui.start('#firebaseui-auth-container', {
//             signInOptions: [
//                 GoogleAuthProvider.PROVIDER_ID
//             ],
//             signInSuccessUrl: window.location.pathname,
//             tosUrl: 'https://www.elite.team',
//             privacyPolicyUrl: 'https://www.elite.team'
//         })
//     }
//
//     render() {
//         return <div>
//             <h3>
//                 File proof of concept to list all downloaded files belonging to a parcel.
//             </h3>
//             Please log in to continue:
//             <div id={"firebaseui-auth-container"}/>
//         </div>;
//     }
// }
//
// export default UserUnauthenticated;