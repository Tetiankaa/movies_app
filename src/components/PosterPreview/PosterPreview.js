import { useState, useEffect } from 'react';

const PosterPreview = ({posterPath, config, alt}) => {

    const [baseUrl,setBaseUrl] = useState(null);

    useEffect(()=>{
       if (config) {
           setBaseUrl(config.base_url)
       }
    },[config])

    const size = 'w200';
    const posterURL = `${baseUrl}${size}${posterPath}`

    return <img src={posterURL} alt={alt}/>
};

export {PosterPreview};