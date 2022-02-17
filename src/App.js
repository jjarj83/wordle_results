import './App.css';
// import {myAuth} from "./firebase/auth";
// import {useAuthState} from "react-firebase-hooks/auth";
// import Logout from "./components/Auth/Logout";
import Homepage from "./components/Homepage";
// import UserUnauthenticated from "./components/Auth/Login";

function App() {
    // const [user, loading, error] = useAuthState(myAuth);

    // if (loading) {
    //     return (
    //         <div>Please Wait</div>
    //     );
    // } else if (user) {
        return (
            <div>
                {/*aaaa*/}
    {/*//             <Logout/>*/}
                <Homepage/>
            </div>);
    // } else if (error) {
    //     return (
    //         <div>
    //             <Logout/>
    //             <div>An error occured during login, please try again</div>
    //             <div>{error}</div>
    //         </div>
    //     )
    // } else {
    //     return <UserUnauthenticated/>
    // }
}

export default App;
