import {Route, Routes} from "react-router-dom";

import {Header, MoviesList} from "./components";
import {AboutPage, GenrePage, HomePage, MoviePage} from "./pages";
import css from './Main.module.css';

const App = () => {
    return (
        <div className={css.Main}>
        <Header/>
            <MoviesList/>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'movies'} element={<MoviePage/>}/>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'genre'} element={<GenrePage/>}/>
        </Routes>
        </div>
    );
};

export {App};