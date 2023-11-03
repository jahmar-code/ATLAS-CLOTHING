import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../lib/client'


export default function FooterBanner( { footerBanner: { discount, largeText1, largeText2, saleTime, smalltext, midText, desc, product, buttonText, image}}) {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smalltext}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link to={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        {image && (
        <img 
          src={urlFor(image)} className="footer-banner-image"
        />
        )}

      </div>
    </div>
  )
}

