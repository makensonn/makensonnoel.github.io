import Image from 'next/image';
import React from 'react';
import ticImg from '../public/assets/projects/tictactoe.png'; //Tic Tac Toe
import YouTubePlayer from '../components/YouTubePlayer';
import TicTacToe from '../components/TicTacToe';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

const TicTacToePage = () => {
  return (
    <div className='w-full h-screen'>

      {/*Header*/}
      <div className='w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute' 
          layout='fill'
          objectFit='cover'
          src={ticImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Tic Tac Toe</h2>
          <h3>Next.js / TailwindCSS </h3>
        </div>
      </div>
      {/*Header*/}
    
      {/* Project Overview */}
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>
            Tic Tac Toe
          </h2>
          <br></br>
          <TicTacToe /> 

          <br></br><br></br>
          <h2>Overview</h2>
          <p>
            This Tic Tac Toe game is implemented as a component in a Next.js application, allowing users 
            to play against a computer-controlled player. The game board is rendered using a grid layout, 
            and the styling is done using Tailwind CSS classes.
          </p>

          <br></br><br></br>
          <h2>Key Features</h2>
          <p>
            1. Interactive Gameplay: Users can click on the empty cells to make their moves. The game alternates between the human player (X) and the computer player (O).
            <br></br><br></br>
            2. Computer Player Logic: The computer player's moves are determined using a random selection algorithm. It chooses an available cell on the board to place its symbol.
            <br></br><br></br>
            3. Win Detection: The game checks for winning combinations after each move to determine if a player has won. If there is a winner, the game displays a message indicating the winning player. In case of a draw, a "draw" message is shown.
            <br></br><br></br>
            4. Resetting the Game: A reset button is provided to allow users to start a new game. Clicking the reset button clears the board and resets the game state.
          </p>

          <br></br><br></br>
          <h2>Implementation Details</h2>
          <p>
          <li>The game logic is implemented using React Hooks, specifically the useState and useEffect hooks, to manage the board state, current player, and winner.</li>
            <br></br>
            <li>The handleCellClick function handles the user's move by updating the board state, checking for a winner, and changing the current player.</li>
            <br></br>
            <li>The makeComputerMove function is triggered when it's the computer player's turn. It randomly selects an available cell and updates the board state.</li>
            <br></br>
            <li> The checkWinner function checks for winning combinations by comparing the symbols in the board array against predefined winning combinations.</li>
            <br></br>
            <li>The game's UI is styled using Tailwind CSS classes, providing a clean and responsive design. The cells are expanded using flexbox to create a square shape for each box.</li>
            <br></br>
            <li>The component can be easily integrated into an existing Next.js project by importing the TicTacToe component and rendering it within a page or another component.</li>
          </p>

          <br></br><br></br>
          <h2>Conclusion</h2>
          <p>
            This Tic Tac Toe game component offers an engaging gaming experience with a computer-controlled player 
            in a Next.js application. With its interactive gameplay, win detection, and clean design using Tailwind CSS, 
            it provides an enjoyable and visually appealing gaming experience.
          </p>
          
          <a
            href='https://github.com/makensonn/makensonn.github.io'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://makenson.com/tic'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        {/*Project Overview*/}

        {/*Technologies*/}
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Technologies */}
      
      {/* Back Button */}
      <div className='flex justify-center py-12'>
          <Link href='/#projects'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleLeft
                  className='text-[#0a192f]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      {/* Back Button */}

    </div>
  );
};

export default TicTacToePage;