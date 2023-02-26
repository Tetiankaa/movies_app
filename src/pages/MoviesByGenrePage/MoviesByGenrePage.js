import {useParams} from "react-router-dom";
import {GenreInfo} from "../../components";

const MoviesByGenrePage = () => {
    const {genreId} = useParams();

    return (
        <div>
            <GenreInfo genreId={genreId}/>
        </div>
    );
};

export {MoviesByGenrePage};