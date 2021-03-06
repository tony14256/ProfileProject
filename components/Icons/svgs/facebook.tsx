import React from 'react';

const Index = ({ size }: { size: number }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      width={`${size}rem`}
      height={`${size}rem`}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <path
        fill="#1976D2"
        d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64
	C512,28.704,483.296,0,448,0z"
      />
      <path
        fill="#FAFAFA"
        d="M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64
	v176h96V336h48L432,256z"
      />
    </svg>
  );
};

export default Index;
