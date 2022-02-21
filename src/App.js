import './App.css';
import Homepage from "./components/Homepage";
import {createTheme} from "@mui/material";

function App() {
    //Define theme to allow custom colors on the MUI buttons
    const theme = createTheme({
        palette: {
            buttons: {
                main: '#60B2E5'
            }
        }
    })
    //Wrap the homepage in the app css class, and pass down previously defined theme
    return (
        <div className={'App'}>
            <Homepage theme={theme}/>
        </div>);

}

export default App;
