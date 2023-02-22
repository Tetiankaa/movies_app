import css from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
        <NavLink to={""}>Головна сторінка</NavLink>
            <NavLink to={"films"}>Фільми</NavLink>
            <NavLink to={"serial"}>Серіали</NavLink>
            <NavLink to={"cartoon"}>Мультфільми</NavLink>
            <NavLink to={"genre"}>Жанри</NavLink>
        </div>
    );
};

export {Header};