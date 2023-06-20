import React from "react";
import '../index.css'


const ServiceCard = (props) => {
  const { title, des, pic } = props;

  return <div className="rounded-lg shadow-lg overflow-hidden">
    <article className="bg-skin overflow-hidden rounded-lg shadow-lg max-h-full">
      <div>
        <img alt={title} className="object-cover h-72 w-96" src={pic} />
      </div>
      
      <div className="rounded-b-lg z-50 bg-skin relative -mt-2 p-4">
        <header className="leading-tight mb-2">
          <h1 className="text-lg font-bold">
            <a className="no-underline hover:underline text-black" href="#">
              {title}
            </a>
          </h1>
        </header>

        <p className="hidden-over-3-line">{des}</p>
      </div>
    </article>
  </div>
}

export default ServiceCard;