import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const App = () => {
  return (
    <div className="container mx-auto bg-gray-dark text-skin rounded-xl shadow p-4 m-10">
      {/* <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p> */}
      <header className='grid grid-cols-12 gap-2 justify-between items-center'>
        <div className='col-span-2 tracking-widest text-2xl font-logo'>Reseration</div>
        <div className='col-span-8 mx-auto'>
          <div className='border border-teal-700 px-4 py-2 rounded-3xl h-10 grid grid-flow-col auto-cols-max justify-between items-center divide-x divide-white'>
            <div className='px-4'>預約項目</div>
            <div className='px-4'>月份</div>
            <div className='px-4'>人數</div>
            <div className='px-4'><FontAwesomeIcon icon={solid('magnifying-glass')} color="#c1b2ab" /></div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-cols-2 gap-4 justify-between items-center'>
            <div className=''>
              <div className='bg-skin text-gray-dark px-2 py-2 rounded-full h-10 text-center'>
                直接預約
              </div>
            </div>
            <div className='border-2 border-skin rounded-full font-bold text-center w-10 h-10 p-2'>
              A
            </div>
          </div>
        </div>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}
export default App;
