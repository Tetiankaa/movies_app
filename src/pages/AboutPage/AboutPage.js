import {useParams} from "react-router-dom";

import {MovieInfo} from "../../components";

const AboutPage = () => {
    const {movieId} = useParams();

    return (
        <div>
            <MovieInfo movieId={movieId} />
        </div>
    );
};

export {AboutPage};