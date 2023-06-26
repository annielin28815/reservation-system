import React from "react";
import '../index.css'


const ServiceCard = (props) => {
  const { title, des, pic } = props;

  return <div className="rounded-lg">
    <article className="bg-skin rounded-lg shadow-lg max-h-full ">
      
      
      <div className="rounded-b-lg z-50 bg-skin relative -mt-2 p-4" style={{position: 'relative'}}>
        <div className="rounded-full" style={{position: 'absolute', top: '-50px', left: '-50px', zIndex: '30', width: '100px', height: '100px',}}>
          <img alt={title} className="object-cover rounded-full" src={pic} style={{width: '100%'}}/>
        </div>
        <header className="leading-tight mb-2">
          <h4 className="text-lg font-bold">
            <a className="no-underline hover:underline text-black" href="#">
              {title}
            </a>
          </h4>
        </header>

        <p className="hidden-over-3-line">{des}</p>
      </div>
    </article>
  </div>
}

export default ServiceCard;