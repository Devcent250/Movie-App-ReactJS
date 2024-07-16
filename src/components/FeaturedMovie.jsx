import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

const FeaturedMovie = () => {
    return (
        <div className='bg-black text-white w-full p-10'>
            <h2 className='text-2xl pb-5 ml-[200px] '>Recently Uploaded</h2>
            <div className='flex space-x-10 justify-center '>
                <div className='flex items-start'>
                    <img className='w-16 h-28 rounded-md' src="src/assets/the-flash.jpeg" alt="The Flash" />
                    <div className='ml-4'>
                        <h3 className='font-bold'>The Flash</h3>
                        <p>Series / S 2 / EP 9</p>
                        <p>11/05/23</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <img className='w-16 h-28 rounded-md' src="src/assets/fubar.jpeg" alt="Fubar" />
                    <div className='ml-4'>
                        <h3 className='font-bold'>Fubar</h3>
                        <p>Series / S 1 / EP 8</p>
                        <p>11/05/23</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <img className='w-16 h-28 rounded-md' src="src/assets/manifest.jpeg" alt="Manifest" />
                    <div className='ml-4'>
                        <h3 className='font-bold'>Manifest</h3>
                        <p>Series / S 4 / EP 12</p>
                        <p>11/05/23</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <img className='w-16 h-28 rounded-md' src="src/assets/silo.jpeg" alt="Silo" />
                    <div className='ml-4'>
                        <h3 className='font-bold'>Silo</h3>
                        <p>Series / S 1 / EP 10</p>
                        <p>11/05/23</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative w-14 h-14">
                        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 
                        -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center
                         text-black justify-center">
                            <ArrowForwardIcon  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MovieCard = ({ imageSrc, title, duration, rating, genres }) => {
    return (
        <div className='relative bg-gray-800 rounded-lg overflow-hidden w-64'>
            <img src={imageSrc} alt={title} className='w-full h-64 object-cover' />
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                    <PlayCircleIcon style={{ fontSize: 40, color: '#FF0000' }} />
                </div>
            </div>
            <div className='absolute top-4 left-4 flex items-center space-x-2 text-white'>
                <AccessTimeIcon />
                <span>{duration}</span>
            </div>
            <div className='absolute top-4 right-4 flex items-center space-x-1 text-white'>
                <StarIcon />
                <span>{rating}</span>
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-bold'>{title}</h3>
                <div className='flex flex-wrap mt-2'>
                    {genres.map((genre, index) => (
                        <span key={index} className='bg-red-500 rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2'>
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedMovie;
