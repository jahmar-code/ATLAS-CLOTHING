import React from 'react'
import { client, urlFor }  from '../../lib/client'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';








export default function ProductDetails() {
    

    const { decQty, incQty, qty, onAdd} = useStateContext();



    
    const { slug } = useParams();

    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])


    useEffect(() => {
      const fetchData = async () => {
        try {
          const query = `*[_type == "product" && slug.current == '${slug}'][0]`; // Modify this query based on your schema
          const productQuery = '*[_type == "product"]'

          const product = await client.fetch(query);
          const products = await client.fetch(productQuery);

          setProduct(product);
          setProducts(products);


        } catch (error) {
          console.error('Error fetching data from Sanity:', error);
        }
      };
  
      fetchData();
    }, []); 
  
    const { image, name, details, price } = product
    const [index, setIndex] = useState(0)

    return (
    // <div>
    //     <div className='product-detail-container'>
    //         <div className='image-container'>
    //             {image && (
    //                 <img src={urlFor(image && image[0])}/>  
    //             )}
    //         </div>
    //         {/* <div className='small-images-container'>
    //             {image?.map((item,i) => 
    //                 <img 
    //                     src={urlFor(item)}
    //                     className=''
    //                     onMouseEnter=''
    //                 />
    //             )}

    //         </div> */}
    //         <div className='product-details-desc'>
    //             <h1>{name}</h1>
    //             <div className='reviews'>
    //                 <div>
    //                     <AiFillStar />
    //                     <AiFillStar />
    //                     <AiFillStar />
    //                     <AiFillStar />
    //                     <AiOutlineStar />
    //                 </div>

    //                 <h4>Details: </h4>
    //                 <p>{details}</p>
    //                 <p className='price'>${price}</p>
    //                 <div clas></div>
    //             </div>
    //         </div>
    //     </div>
    // </div>



    // fix this "product details in vid"
    <div>
    <div className="product-detail-container">
      <div>
        <div className="image-container">
        {image && (
                     <img src={urlFor(image && image[index])}
                     className='product-detail-image'/>  
                 )}
        </div>
        <div className="small-images-container">
          {image?.map((item, i) => (
            <img 
              key={i}
              src={urlFor(item)}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{name}</h1>
        <div className="reviews">
          {/* <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            (20)
          </p> */}
        </div>
        <h4>Details: </h4>
        <p>{details}</p>
        <p className="price">${price}</p>
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" onClick={() => onAdd(product,qty)}>Add to Cart</button>
          <button type="button" className="buy-now" onClick=''>Buy Now</button>
        </div>
      </div>
    </div>

    {/* <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
    </div> */}
  </div>
  )
}
