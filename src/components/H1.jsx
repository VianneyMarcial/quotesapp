import React from 'react';
import quotes from '../quotes.json'

const H1 = ({index}) => {
  return (
      <h1>
        <i class="fa-3x fa-solid fa-quote-left"></i>
        {quotes[index].quote}
      </h1> 
  );
};

export default H1;