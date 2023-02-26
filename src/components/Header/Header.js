import {NavLink} from "react-router-dom";

import css from './Header.module.css';
const Header = () => {
    return (
        <div className={css.Header}>
        <NavLink to={""}>Головна сторінка</NavLink>
            <NavLink to={"movies"}>Фільми</NavLink>
            <NavLink to={"serial"}>Серіали</NavLink>
            <NavLink to={"cartoon"}>Мультфільми</NavLink>
            <NavLink to={"genre"}>Жанри</NavLink>
        </div>
    );
};

export {Header};