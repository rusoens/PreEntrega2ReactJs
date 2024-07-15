import React from 'react';
import { IconHorseToy } from '@tabler/icons-react';

const Greeting = (props) => {
  return (
    <>
      <div className="card">
        <h1>
          {props.titulo1} <IconHorseToy color="black" size={60} />
        </h1>
      </div>
      <div className="card">
        <h2>
          {props.titulo2} 
        </h2>
      </div>
   </>
  );
};
export default Greeting;