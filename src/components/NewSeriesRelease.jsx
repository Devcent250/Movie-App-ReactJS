import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MovieCard = ({ imageSrc, title, genres, duration, ep }) => {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden mb-6 ml-[-36px] w-64">
      <div className="absolute top-2 left-2 bg-[#ff0000] px-2 py-1 rounded-md text-xs font-semibold text-white z-10">
        Ep6{ep}
      </div>
      <img
        src={imageSrc}
        alt={title}
        className="w-60 h-80 object-cover flex justify-center rounded-md"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold text-white">{title}</h3>
          <div className="flex flex-wrap">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="bg-[#ff0000] rounded-md px-2 py-1 text-xs font-semibold text-white mr-3 mb-2"
              >
                {genre}
              </span>
            ))}
            <div className="text-white flex items-center">
              <span className="border border-white px-1 rounded-md text-xs flex items-center">
               
                {duration}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewSeriesRelease = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl pb-5 ml-[200px]">New Release-Series </h2>
        <a href="#" className="text-white flex items-center mr-[200px]">
          View all <ArrowForwardIcon className="ml-1" />
        </a>
      </div>
      <div className="flex justify-center gap-10 flex-row w-full">
        <MovieCard
          imageSrc="src/assets/silo.jpeg"
          title="Silo"
          duration="Season1"
          genres={["HD"]}
          
        />
        <MovieCard
          imageSrc="src/assets/blackninght.jpeg"
          title="Black night"
          duration="Season1"
          genres={["HD"]}
        />
        <MovieCard
          imageSrc="src/assets/drposofgod.jpeg"
          title="Drops Of God"
          duration="Season1"
          genres={["HD"]}
        />
        <MovieCard
          imageSrc="src/assets/nightagent.jpeg"
          title="The Night Agent"
          duration="3:12:00"
          genres={["HD"]}
        />
      </div>
    </div>
  );
};

export default NewSeriesRelease;
