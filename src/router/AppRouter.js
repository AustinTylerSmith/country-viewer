import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailsPage";
const AppRouter = ({ themeMode, searchFor, filterBy, updateSearchForState, updateFilterByState }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage themeMode={themeMode} searchFor={searchFor} filterBy={filterBy} updateSearchForState={updateSearchForState} updateFilterByState={updateFilterByState}  />}></Route>
                <Route path={"/detail"} element={<DetailPage themeMode={themeMode}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter