import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, BrowserRouter
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './home.js'
import Blogpost from "./components/blogpost";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path = "/home" element={<Home/>}/>
            <Route path = "/skyisfalling" element={<Blogpost title = "Sky Is Falling" text = "Optimization to making it to where objects are persistent was very important. My game functions by running a cutscene and at the end of the cutscene players are able to move because moving = false. There's a variable called weight which determines the speed of the boat and if it will drown are not capacity is the upper limit of weight. Animals spawn above the boat at random x positions and when they intersect with the boats hitbox they get caught on the boat. Then when the boat collides with the barn the animals are put inside and the score and timer goes up. The losing conditions are that the timer either goes down or the weight exceed capacity." video ="/skyisfalling.mp4"/>}/>
            <Route path = "/digitalportfolio" element={<Blogpost title = "Digital Portfolio" text = "My programs functionality as displayed in the video is a random number generator that gets partitioned through a randomly selected starting point to the end of the number string. You have to recall what's inside of the partition based on what's the two outer numbers are and your remembrance of the full number. My programs functionality as displayed in the video is a random number generator that gets partitioned through a randomly selected starting point to the end of the number string. You have to recall what's inside of the partition based on what's the two outer numbers are and your remembrance of the full number." video ="/digitalportfolio.mp4"/>}/>
            <Route path = "/cardgame" element={<Blogpost title = "Card Game" text = "My game requires you to press the play button, you can pull a card from the deck or discard pile. Or you can put a card in the deck or press knock. If you run out of tokens then the game ends." video ="/31game.mp4"/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
