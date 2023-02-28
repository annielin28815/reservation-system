import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-10">
      {/* <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p> */}
      <header className='grid grid-cols-12 gap-2 justify-between items-center'>
        <div className='col-span-2'>Reseration</div>
        <div className='col-span-8 mx-auto'>
          <div className='flex border-teal-500  px-8 py-2 rounded  h-10'>
            <div>search</div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-cols-2 gap-4 justify-between items-center'>
            <div className=''>
              <div className='bg-teal-700 text-green-50 px-2 py-2 rounded-full h-10 text-center'>
                直接預約
              </div>
            </div>
            <div className=' bg-gray-100 text-teal-700 rounded-full font-bold text-center w-10 h-10 p-2'>
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
