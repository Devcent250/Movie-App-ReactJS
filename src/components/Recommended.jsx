import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const MovieCard = ({ imageSrc, title, genres, duration, ep }) => {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden mb-6 ml-[-36px] w-64">
    
      
      <img
        src={imageSrc}
        alt={title}
        className="w-60 h-80 object-cover rounded-md flex justify-center"
      />
      <div className="p-4 rounded-md">
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


const Recommended = () => {
  return (
    <div className="bg-black text-white p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl pb-5 ml-[200px]">Recommended</h2>
        <div className="flex ml-[-570px] top-[-78px] gap-2">
          <span className=" text-white bg-[#ff0000] rounded-md px-2 py-1 text-xs ">Movies</span>
          <span className="border border-[#ff0000] rounded-md px-2 py-1 text-xs text-white">Series</span>
          <span className="border border-[#ff0000] rounded-md px-2 py-1 text-xs text-white">Animation</span>
        </div>
        <a href="#" className="text-white flex items-center mr-[200px]">
          View all <ArrowForwardIcon className="ml-1" />
        </a>
      </div>

      <div className="flex justify-center gap-10 flex-row w-full mt-10">
        <MovieCard
          imageSrc="src/assets/robots.jpeg"
          title="Robots"
          duration="Season1"
          genres={["CAM"]}
          
        />
        <MovieCard
          imageSrc="src/assets/loveagain.jpeg"
          title="Love Again"
          duration="Season1"
          genres={["CAM"]}
        />
        <MovieCard
          imageSrc="src/assets/hypo.jpeg"
          title="Hypo"
          duration="Season1"
          genres={["CAM"]}
        />
        <MovieCard
          imageSrc="src/assets/paint.jpeg"
          title="paint"
          duration="3:12:00"
          genres={["CAM"]}
        />
      </div>
      <div className="flex justify-center gap-10 flex-row w-full">
        <MovieCard
          imageSrc="src/assets/book.jpeg"
          title="Book Club"
          duration="Season1"
          genres={["CAM"]}
        
        />
        <MovieCard
          imageSrc="src/assets/themother.jpeg"
          title="The Mother"
          duration="Season1"
          genres={["CAM"]}
        />
        <MovieCard
          imageSrc="src/assets/6th.jpeg"
          title="January 6th"
          duration="Season1"
          genres={["CAM"]}
        />
        <MovieCard
          imageSrc="src/assets/sisu.jpeg"
          title="Sisu"
          duration="3:12:00"
          genres={["CAM"]}
        />
      </div>
    </div>
  )
}

export default Recommended;