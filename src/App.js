import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import Datepicker from "tailwind-datepicker-react";
import { useState } from 'react';

const options = {
	title: false,
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-red-500",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                </svg>,
		next: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "en",
}

const App = () => {
  // const {currentDate, setCurrentDate } = useState(format(new Date(), 'yyyy/MM/dd'));
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
		console.log(e)
	}
	const handleClose = (bool) => {
		setShow(bool);
	}

  return (
    <div>
      <div className='flex flex-col' style={{display: 'none'}}>
        <div className='flex flex-row relative'>
          <div className='menu-bar-list'>
            <div className='font-bold slogan'>Start from zero.</div>
            <ul>
              <li>
                <p className='text-5xl font-semibold text-gray-800'>個人帳戶</p>
                <p className='text-4xl text-gray-700 mt-4'>Personal account</p>
              </li>
              <li>
                <p className='text-5xl font-semibold text-gray-800'>收藏項目</p>
                <p className='text-4xl text-gray-700 mt-4'>Favorites</p>
              </li>
              <li>
                <p className='text-5xl font-semibold text-gray-800'>訂單一覽</p>
                <p className='text-4xl text-gray-700 mt-4'>Order List</p>
              </li>
              <li>
                <p className='text-5xl font-semibold text-gray-800'>使用方式</p>
                <p className='text-4xl text-gray-700 mt-4'>How to use</p>
              </li>
            </ul>
          </div>
          <div style={{background: '#0073B4', borderRadius: '0 120px 0px 0', height: 'calc(100vh - 150px)', width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '75px 0px'}}>
            <div style={{marginBottom: '45px', background: '#FF6853', borderRadius: '50%',}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eee5e3" style={{width: '90px', padding: '10px',}}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
          </div>
        </div>
        <div className='w-screen absolute bottom-0' style={{background: '#0073B4', borderRadius: '150px 0px 120px 0px', height: '250px'}}>
          <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 menu-bg'>
            <p className='text-center'>Reserve</p>
          </div>
        </div>
      </div>

        {/* <header className='container mx-auto py-6'>
          <div className='grid grid-cols-12 gap-2 justify-be【tween items-center bg-gray-dark text-skin rounded-xl shadow p-4 '>
            <div className='col-span-2 tracking-widest text-2xl font-logo'>Save us</div>
            <div className='col-span-8 mx-auto'>
              <div className='border border-teal-700 px-4 py-2 rounded-3xl h-10 grid grid-flow-col auto-cols-max justify-between items-center divide-x divide-white'>
                <div className='px-4'>預約項目</div>
                <div className="flex items-center justify-center">

                <div className="relative max-w-sm">
                  <Datepicker options={options} onChange={(e) => handleChange(e)} show={show} setShow={(e) => handleClose(e)} />
                </div>

            </div>
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
          </div>
        </header> */}

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/login" element={<LoginPage />}/>
          </Routes>
        </BrowserRouter>

        <footer></footer>
    </div>
  );
}
export default App;
