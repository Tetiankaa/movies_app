import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './Movies.module.css';

const MoviesListCard = ({movie, config}) => {
    const {title, poster_path} = movie;


    return (
        <div className={css.Movies}>
            <PosterPreview posterPath={poster_path} config={config} alt={title}/>
                <div>{title}</div>
            <button>Більше інформації</button>
        </div>
    );
};

export {MoviesListCard};