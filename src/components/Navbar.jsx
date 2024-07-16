import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CircleIcon from '@mui/icons-material/Circle';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-center items-center text-white">
   <div className='space-x-4 flex items-center'>
  <div className='flex flex-col items-center'>
    <a href="">Home</a>
    <CircleIcon sx={{ fontSize: 4}} className='text-[#FF0000]'/>
  </div>
  <a href="">Genre</a>
  <a href="">Country</a>
</div>

      <div className='relative py-2 ml-9 mr-9'>
        <input 
          type='text' 
          className='pl-10 py-2  rounded-full placeholder-black text-black w-72' 
          placeholder='Search Movies...' 
        />
        <div className='absolute right-4 top-3 text-black text-lg'>
          <SearchIcon />
        </div>
      </div>
      <div className='space-x-4 flex justify-center items-center' >
        <a href="">Movies</a>
        <a href="">Series</a>
        <a href="">Animation</a>
        <a href="">Login/SignUp</a>
        <NotificationsNoneIcon />
      </div>
    </nav>
  );
};

export default Navbar;