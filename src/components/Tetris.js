import React from 'react';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
   return ( <div>
        <Stage />
        <aside>
           <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Levels" />
           </div>
           <Start/>
        </aside>
    </div>
   )
};

export default Tetris;