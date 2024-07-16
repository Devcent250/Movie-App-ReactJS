import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';

const MovieCard = () => {
  return (
    <div className="relative space-y-[320px]">
      <img src="src/assets/bg.jpeg" alt="Movie" className="w-full h-auto" />
      <div className='absolute inset-0 flex flex-col justify-center items-center space-y-4'>
        <div className='flex space-x-4 mt-[-98px]'>
        <h1 className='text-white bg-[#FF0000] py-1 px-2 font-bold flex items-center'>
          Watch Now <PlayCircleIcon className='ml-2'/>
        </h1>
        <p className='text-white font-extrabold border-2 border-[#FF0000] border-solid py-1 px-2 flex items-center'>
          Watch Later <AccessTimeFilledIcon className='ml-2'/>
        </p>
        </div>
      
        <div className='flex flex-col space-y-2 mt-10'>
          <h2 className='font-bold text-white text-left text-2xl'>
            Avatar: The Way of Water
          </h2>
          <div className='flex space-x-3'>
            <h2 className='bg-white rounded-xl px-2'>Action</h2>
            <h2 className='bg-white rounded-xl px-2'>Adventure</h2>
            <h2 className='bg-white rounded-xl px-2'>Science Fiction</h2>
            <div className='flex space-x-3 text-white'>
            <p className='flex items-center'><CalendarMonthIcon /><span className='ml-1'>2022</span></p>
            <p className='flex items-center'><AccessTimeIcon /><span className='ml-1'>3:12:00</span></p>
            <p className='flex items-center'><StarIcon /><span className='ml-1'>8.5</span></p>
          </div>
          </div>
        
        </div>
        <div className='mt-10 text-white max-w-2xl'>
          <h2>
            Set more than a decade after the events of the first film, learn the story of the 
            Sully family (Jake, Neytiri, and their kids), the trouble that follows them, 
            the lengths they go to keep each other safe, the battles they fight to stay alive,
            and the tragedies they endure.
          </h2>
        </div>
        
        <div className="flex items-center space-x-3">
    
      </div>
      <div className='flex space-x-3 text-white'>
      <h3 className='bg-[#FF0000] rounded-full inline-block w-[60px] h-[18px]'></h3>


    <CircleIcon />
    <CircleIcon />
    <CircleIcon />
    <CircleIcon /> 
</div>


      </div>
    </div>
  );
};

export default MovieCard;
