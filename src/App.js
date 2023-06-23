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
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', position: 'relative'}}>
          <div style={{background: '#eee5e3', height: 'calc(100vh - 100px)', width: 'calc(100vw - 200px)'}}></div>
          <div style={{background: '#395c87', borderRadius: '0 120px 0px 0', height: 'calc(100vh - 150px)', width: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '75px 0px'}}>
            <div style={{marginBottom: '45px'}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eee5e3" style={{width: '90px'}}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </div>
            <div style={{marginBottom: '45px'}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eee5e3" style={{width: '90px'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            </div>
            <div style={{marginBottom: '45px'}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eee5e3" style={{width: '90px'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            </div>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eee5e3" style={{width: '90px'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            </div>
          </div>
        </div>
        <div style={{background: '#395c87', borderRadius: '150px 0px 120px 0px', height: '250px', width: '100vw', position: 'absolute', bottom: '0px'}}></div>
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
