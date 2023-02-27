import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      {/* <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p> */}
      <header className='grid grid-cols-12 gap-2 justify-between items-center'>
        <div className='col-span-2'>Reseration</div>
        <div className='col-span-8 mx-auto'>
          <div className='flex bg-teal-700 text-green-50 px-8 py-4 rounded-full max-w-xl min-w-xs'>
            <div>search</div>
          </div>
        </div>
        <div className='col-span-2'>user</div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
export default App;
