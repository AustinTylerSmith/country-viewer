import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailsPage";
const AppRouter = ({ themeMode }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage themeMode={themeMode}  />}></Route>
                <Route path={"/detail"} element={<DetailPage themeMode={themeMode}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter