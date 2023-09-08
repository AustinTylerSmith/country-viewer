import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
const AppRouter = ({ themeMode }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage themeMode={themeMode} />}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter