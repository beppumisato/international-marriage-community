'use client';

import FlightIcon from '@mui/icons-material/Flight';

export default function ScrollTop() {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={returnTop}
      className='scrollBg fixed z-50 bottom-10 right-10 w-10 h-10 rounded-full'
    >
      <FlightIcon
        sx={{
          fontSize: 26,
          color: '#fda4af',
        }}
      />
    </button>
  );
}
