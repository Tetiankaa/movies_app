import {useEffect, useState} from "react";
import {genreService} from "../../services";

const GenreInfo = ({genreId}) => {
    const [kinds,setKinds] = useState([]);

    useEffect(()=>{
        genreService.getById(genreId).then(({data})=>setKinds(data.results));
    },[genreId])

    return (
        <div>
            {
                kinds && (
                    <h2>
                        {kinds.map((kind)=>(
                            <div key={kind.id}> {kind.title}</div>
                        ))}
                    </h2>
                )}
            </div>
    );
};

export {GenreInfo};