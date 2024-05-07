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
      className='scrollBg fixed z-50 bottom-10 right-10 w-12 h-12 rounded-full'
    >
      <FlightIcon
        sx={{
          fontSize: 30,
          color: '#f97316',
        }}
      />
    </button>
  );
}
