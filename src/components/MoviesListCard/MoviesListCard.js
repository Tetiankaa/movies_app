import ReactStars from 'react-rating-stars-component';
import {useNavigate} from "react-router-dom";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './Movies.module.css';


const MoviesListCard = ({movie, config}) => {
    const {title, poster_path, vote_average} = movie;
    const navigate = useNavigate();

    return (
        <div className={css.Movies}>
            <PosterPreview posterPath={poster_path} config={config} alt={title}/>
                <div>{title}</div>
            <button onClick={()=>navigate(`/movies/${movie.id}`)}>Більше інформації</button>
            <ReactStars count={10} edit={false} size={24} value={vote_average} isHalf={true} classNames={'Stars'}/>

        </div>
    );
};

export {MoviesListCard};
