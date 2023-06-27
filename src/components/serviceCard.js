import React from "react";
import '../index.css'


const ServiceCard = (props) => {
  const { title, des, pic } = props;

  return <div className="rounded-lg" style={{padding: '0px 50px'}}>
    <article className="rounded-lg  max-h-full " style={{position: 'relative'}}>
      
      
      <div className="rounded-full" style={{position: 'absolute', top: '-50px', left: '-30px', zIndex: '30', width: '200px', height: '200px',}}>
        <img alt={title} className="object-cover rounded-full" src={pic} style={{width: '100%'}} />
      </div>
      <div className="rounded-lg shadow-lg bg-skin relative" style={{ padding: '40px 20px 40px 100px', margin: '50px 0px 0px 80px'}}>
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