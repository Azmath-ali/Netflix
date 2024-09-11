import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <div className="flex items-center justify-center mt-[7%]" >
      
    <Box    sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    </div>
  );
}