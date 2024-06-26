import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import monkeyImage from './themonkey.png'; // Import the monkey image
import Xlogo from './xlogo.jpg';
import './App.css';
import TweetButton from './TweetButton';

function App() {
  return (
    <div className="banana-cursor h-screen w-screen flex flex-col justify-center items-center bg-black" /*style={{backgroundImage: `url(${process.env.PUBLIC_URL}/jungle.jpg)`}}*/>
      <img src={monkeyImage} alt="Monkey" className="mt-6 mb-6 w-[225px] md:w-[35%] h-auto" /> {/* Image */}
      <TweetButton className="mt-2" tweetText="Monkey say monkey do. This ain't chimp change @monkeyonsolana $MNKY" solAddress="<input SOL address here>"/>
      <motion.div className="pt-8 flex items-center gap-2">
        {/* Animated container */}
        <motion.div
          initial={{ y: -3 }} // Adjusted initial position
          animate={{
            y: [3, -3, 3, 0, 3, -3, 3, 0], // Adjusted motion range
            transition: { duration: 2.5, repeat: Infinity, repeatType: 'reverse' } // Increased duration
          }}
        >
          <div className="text-white text-3xl font-custom">
            {/* Larger clickable area for "Follow On" */}
            <a href="https://x.com/monkeyonsolana" target="_blank" rel="noopener noreferrer" className="block p-2">
              FOLLOW ON
            </a>
          </div>
        </motion.div>
        <a href="https://x.com/monkeyonsolana" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Xlogo}
            alt="X Logo"
            className="w-9 h-9 -mt-1 rounded-md"
            initial={{ y: -3 }} // Adjusted initial position
            animate={{
              y: [3, -3, 3, 0, 3, -3, 3, 0], // Adjusted motion range
              transition: { duration: 2.5, repeat: Infinity, repeatType: 'reverse' } // Increased duration
            }}
          /> {/* X Logo */}
        </a>
      </motion.div>
    </div>
  );
}

export default App;