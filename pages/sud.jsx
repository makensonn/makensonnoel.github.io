import Image from 'next/image';
import React from 'react';
import sudImg from '../public/assets/projects/sudoku.png'; //Tic Tac Toe
import SudokuGame from '../components/Sudoku';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

const SudokuSolverPage = () => {
  return (
    <div className='w-full h-screen'>

      {/*Header*/}
      <div className='w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute' 
          layout='fill'
          objectFit='cover'
          src={sudImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Sudoku Solver</h2>
          <h3>Java </h3>
        </div>
      </div>
      {/*Header*/}
    
      {/* Project Overview */}
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>
            Sudoku Solver
          </h2>
          <br></br>
          <SudokuGame /> 

          <br></br><br></br>
          <h2>Overview</h2>
          <p>
            In this task, I created a Sudoku game using JSX and integrated Tailwind CSS for styling. 
            The Sudoku game allows users to input numbers into a 9x9 grid, aiming to complete the grid 
            with numbers from 1 to 9 without any repetition in rows, columns, or 3x3 boxes. 
            The game provides a user-friendly interface for solving Sudoku puzzles.
          </p>

          <br></br><br></br>
          <h2>Key Features</h2>
          <p>
            1. Interactive Grid: The Sudoku grid is rendered dynamically, allowing users to input numbers into each cell. Changes made by the user are reflected in real-time.
            <br></br><br></br>
            2. Input Validation: The game validates user input to ensure that only numbers from 1 to 9 are accepted in each cell. Non-numeric inputs or numbers outside the valid range are handled gracefully.
            <br></br><br></br>
            3. Responsive Design: The game's UI is designed to be responsive using Tailwind CSS classes, ensuring a consistent experience across different screen sizes and devices.
          </p>

          <br></br><br></br>
          <h2>Implementation Details</h2>
          <div>
            <li>State Management: The Sudoku board is stored in the component state using the useState hook. Each cell of the board is represented by a 2D array of numbers.</li>
            <br></br>
            <li>User Input Handling: The handleCellChange function is responsible for updating the board state when a user enters a number in a cell. It extracts the new value from the input element and updates the corresponding cell in the board state.</li>
            <br></br>
            <li>Rendering the Board: The renderBoard function generates the JSX code for rendering the Sudoku board. It iterates over the board state and generates table rows and cells. Each cell contains an input element for user input.</li>
            <br></br>
            <li>Styling with Tailwind CSS: Tailwind CSS classes are applied to various elements to style the game's UI. Classes like border, text-center, bg-gray-200, and focus:outline-none are used to achieve the desired appearance.</li>
          </div>

          <br></br><br></br>
          <h2>Conclusion</h2>
          <p>
            In this task, I successfully created a Sudoku game using JSX and Tailwind CSS. 
            The game allows users to solve Sudoku puzzles by inputting numbers into a 9x9 grid. 
            The use of React for component-based UI and Tailwind CSS for styling ensured a clean and responsive design. 
            This implementation can serve as a foundation for further enhancements, such as implementing puzzle generation, solving algorithms, and game logic validation.
          </p>
          
          <a
            href='https://github.com/makensonn/makensonn.github.io/blob/master/components/Sudoku.jsx'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Game Code</button>
          </a>
          <a
            href='https://github.com/makensonn/Sudoku-solver/blob/master/Sudokusolver.java'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Solver Code</button>
          </a>
        </div>
        {/*Project Overview*/}

        {/*Technologies*/}
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Java
              </p>
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

export default SudokuSolverPage;