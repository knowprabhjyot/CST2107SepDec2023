'use client';

import React, { useState, useEffect } from 'react'
import { API_KEY } from '../../components/Section';

const page = ({ params }) => {

    const [movie, setMovie] = useState();

    const handleMovieApi = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${params.movie}?language=en-US&page=1&api_key=${API_KEY}`);
        const data = await res.json();
    
        setMovie(data);
    }

    useEffect(() => {
        handleMovieApi();
    }, []);


    return (
        movie &&
            (
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}} title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{movie.orignal_title}</div>
                    <p className="text-gray-700 text-base">{movie.overview}</p>
                </div>
                <div className="flex items-center">
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">IMDB ID : {movie.imdb_id}</p>
                            <p className="text-gray-600">Popularity: {movie.popularity}</p>
                        </div>
                </div>
            </div>
        </div>
            )
    )
}

export default page;