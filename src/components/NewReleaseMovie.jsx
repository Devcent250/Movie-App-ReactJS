import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

const MovieCard = ({ imageSrc, title, genres, duration }) => {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden mb-6 ml-[-36px] w-64">
      <img
        src={imageSrc}
        alt={title}
        className="w-60 h-80 object-cover flex justify-center text-sm rounded-md"
      />  {/* Increased height to h-80 */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold text-white">{title}</h3>
          <div className="flex flex-wrap text-right">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="bg-[#ff0000] rounded-md px-2 py-1 text-xs font-semibold text-white mr-3 ml-3"
              >
                {genre}
              </span>
            ))}
           <div className="text-white flex items-center">
  <span className="border border-white px-1 rounded-md text-xs">
    <AccessTimeIcon className="mr-1 text-xs" /> 
    {duration}
  </span>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewReleaseMovie = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <h2 className='text-2xl pb-5 ml-[200px] '>New Release Movies</h2>
        <a href="#" className="text-white flex items-center mr-[200px]">
          View all <ArrowForwardIcon className="ml-1" />
        </a>
      </div>
      <div className="flex justify-center gap-10 flex-row w-full"> {/* Added gap-4 class */}
        <MovieCard
          imageSrc="src/assets/gosted.jpeg "
          title="Gosted"
          duration="3:12:00"
          genres={["HD"]}
        />
        <MovieCard
          imageSrc="src/assets/john.jpeg"
          title="John Wick: Ch."
          duration="3:12:00"
          genres={["HD"]}
        />
        <MovieCard
          imageSrc="src/assets/guadians.jpeg"
          title="Guardians of"
          duration="3:12:00"
          genres={["HD"]}
        />
        <MovieCard
          imageSrc="src/assets/convenant.jpeg"
          title="The Convenant."
          duration="3:12:00"
          genres={["HD"]}
        />
      </div>
    </div>
  );
};

export default NewReleaseMovie;
