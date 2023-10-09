import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './pages/homePage.css'
import './pages/detailPage.css'
import reportWebVitals from './reportWebVitals';
import Header from "./components/HeaderComponent";
import AppRouter from "./router/AppRouter";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CountryViewer />
);

function CountryViewer() {
    const [ themeMode, setThemeMode ] = useState(true)
    const [searchFor, setSearchFor] = useState("")
    const [filterBy, setFilterBy] = useState("")

    function updateSearchForState(search) {
        setSearchFor(search)
    }

    function updateFilterByState(filterBy) {
        setFilterBy(filterBy)
    }
    function clickThemeMode() {
        setThemeMode(!themeMode)
    }
    return (
        <>
            <React.StrictMode>
                <Header themeMode={themeMode} clickThemeMode={clickThemeMode} />
                <AppRouter themeMode={themeMode} searchFor={searchFor} filterBy={filterBy} updateSearchForState={updateSearchForState} updateFilterByState={updateFilterByState}/>
            </React.StrictMode>
        </>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
