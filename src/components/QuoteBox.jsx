import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';
import "./quotes.css";
import H1 from './H1'

const QuoteBox = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);

  const changePhrase = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  }

  const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (
    <div className='card' style={{ color: colors[randomColorIndex] }}>
      <div className='phrase'>
        <H1 index={index}/>
        <h3>{quotes[index].author}</h3> 
        <button onClick={changePhrase} style={{ background: colors[randomColorIndex] }}><i class="fa-solid fa-shuffle"></i></button>
      </div>
    </div>
  );
};

export default QuoteBox;