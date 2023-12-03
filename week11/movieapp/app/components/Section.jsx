'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { parseTitle } from '../utils/util';
import Loading from '../loading';

export const API_KEY = `a1da3b13110340ab19ccd74bee7d1bf9`;

const Section = ({ title }) => {

    // movie list data
    const [movies, setMovies] = useState([]);

    const handleMovieApi = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${title}?language=en-US&page=1&api_key=${API_KEY}`);
        const data = await res.json();
        setMovies(data.results);
    }

    useEffect(() => {
        handleMovieApi();
    }, []);

    if (movies.length === 0) {
        return <div className='flex align-center w-full'>
            <Loading />
        </div>
    }
    return (
        <div className="container mx-auto m-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{parseTitle(title)}</h1>
            <div className='flex gap-8 items-start overflow-y-scroll'>
                {
                    movies.length > 0 && (
                        movies.map((movie, index) => <Card movie={movie} />)
                    )
                }
            </div>

        </div>
    )
}

export default Section;