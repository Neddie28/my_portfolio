"use client";

import Box from './Box';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
  return (
    <Box className='flex h-screen items-center justify-center'>
        <BounceLoader className="text-[#915eff]" color='#804dee' size={40}/>
    </Box>
  )
}

export default Loading;