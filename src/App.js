import {Route, Routes} from "react-router-dom";

import {AboutPage, GenrePage, HomePage, MoviePage, NotFoundPage,MoviesByGenrePage} from "./pages";
import css from './Main.module.css';
import {MainLayout} from "./layouts";



const App = () => {
    return (
        <div className={css.Main}>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={''} element={<HomePage/>}/>
                <Route path={'movies'} element={<MoviePage/>}/>
                <Route path={'/movies/:movieId'} element={<AboutPage/>}/>
                <Route path={'genre'} element={<GenrePage/>}/>
                <Route path={'/genre/:genreId'} element={<MoviesByGenrePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
        </div>
    );
};


export {App};