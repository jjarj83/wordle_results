import './App.css';
import Homepage from "./components/Homepage";
import {createTheme} from "@mui/material";

function App() {
    const theme = createTheme({
        palette: {
            buttons: {
                main: '#60B2E5'
            }
        }
    })
    return (
        <div className={'App'}>
            <Homepage theme={theme}/>
        </div>);

}

export default App;
