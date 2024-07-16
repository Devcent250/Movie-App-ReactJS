import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
const MovieCard = ({ imageSrc, title, duration, rating, genres }) => {
    return (
      <div className='relative bg-black rounded-lg overflow-hidden w-64 mb-6'>
        <img src={imageSrc} alt={title} className='w-[110%] h-80 object-cover rounded-md' /> {/* Increased height to h-80 */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <PlayCircleIcon />
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
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-bold text-left  ml-[-10px]'>{title}</h3>
            <div className='flex flex-wrap text-right'>
              {genres.map((genre, index) => (
                <span key={index} className='bg-[#ff0000] rounded-md px-2 py-1 text-xs font-semibold text-white mr-[-10px] ml-3'>
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

const TrendingSection = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl pb-5  ml-[200px] ">Trending</h2>
        <a href="#" className="text-white flex items-center mr-[200px]">
          View all <ArrowForwardIcon className="ml-1" />
        </a>
      </div>
      <div className="flex justify-center gap-14 flex-row w-full"> {/* Added gap-4 class */}
        <MovieCard
          imageSrc="src/assets/medeline.jpeg"
          title="Medeline"
          duration="3:12:00"
          rating="8.0"
          genres={["Action", "Comedy"]}
        />
        <MovieCard
          imageSrc="src/assets/fast.jpeg"
          title="Fast X"
          duration="3:12:00"
          rating="8.0"
          genres={["Fast", "Action", "Thriller"]}
        />
        <MovieCard
          imageSrc="src/assets/theblack.jpeg"
          title="The black..."
          duration="3:12:00"
          rating="8.0"
          genres={["Horror", "Thriller"]}
        />
      </div>
    </div>
  );
};

export default TrendingSection;
