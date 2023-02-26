import {Link} from "react-router-dom";

const GenreListCard = ({genre}) => {
 const  {name} = genre;

    return (
        <div>
            <Link to={`/genre/${genre.id}`}>{name}</Link>

        </div>
    );
};


export {GenreListCard};