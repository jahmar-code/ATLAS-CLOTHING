import React from 'react';
import { Link }  from 'react-router-dom';

import { urlFor } from '../lib/client';

// const HeroBanner = ({ heroBanner }) => {
//   return (
//     <div className="hero-banner-container">
//       <div>
//         <p className="beats-solo">{heroBanner[0].smallText}</p>
//         <h3>{heroBanner[0].midText}</h3>
//         <h1>{heroBanner[0].largeText1}</h1>
//         <img src={urlFor(heroBanner[0].image)} alt="headphones" className="hero-banner-image" />

//         <div>
//           <div className="desc">
//             <h5>Description</h5>
//             <p>{heroBanner.desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroBanner


export default function HeroBanner({ heroBanner }) {
  return (
    <div className='hero-banner-container'>
      <div>
        
        
        <p className='beats-solo'>{heroBanner?.smallText ?? '-'}</p>
        <h3>{heroBanner?.midText ?? '-'}</h3>
        <h1>{heroBanner?.largeText1 ?? '-'}</h1>
        
        {heroBanner.image && (
        <img
          src={urlFor(heroBanner?.image).url()}
          className='hero-banner-image'
          alt="headphones"
          />
        )}

          {/* fix this*/}
        <div>
          <Link to={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner?.buttonText ?? '-'}</button>
          </Link>
          <div className='desc'>
            <h5>DESCRIPTION</h5>
            <p>{heroBanner?.desc ?? '-'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
{/* <img src={urlFor(heroBanner?.image ?? "")} alt="headphones" className='hero-banner-image'></img> */}