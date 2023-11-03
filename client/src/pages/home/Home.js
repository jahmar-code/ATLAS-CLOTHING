//import { useFetch } from '../../hooks/useFetch'
//import ClothingList from '../../components_original/ClothingList'

//import { db, storage } from '../../firebase/config'
//import { collection, getDocs } from 'firebase/firestore'

//import { ref, getDownloadURL } from "firebase/storage";

import './Home.css'
import { useEffect, useState } from 'react'
//import blackguyshirt from '../../assets/images/blackguyshirt.jpeg'
import ProductDetails from '../product/[slug]'

import { Product, FooterBanner, HeroBanner } from '../../components'

import { client }  from '../../lib/client'

export default function Home() {
    //const [clothes, setClothes] = useState(null)

    // useEffect(() => {
    //     const ref = collection(db, 'clothing')
    //     //const img = storage.ref()

        
    //     getDocs(ref)
    //         .then((snapshot) => {
    //             let results =[]
    //             snapshot.docs.forEach(doc => {
    //                 results.push({id: doc.id, ...doc.data()})
    //             })
    //             setClothes(results)
                
    //         })
    // }, [])


    

    // useEffect(() => {
    //     const query = '*[_type == "projects"]'

    //     client.fetch(query)
    //       .then((data) => setProjects(data))
    // }, [])

    // useEffect(() => {
    //   const interval= setInterval(()=>{
    //     const fetchdata = async () => {
    //       const res = await fetch("url")
    //       const data = await res.json()
    //       setsongs(data)
    //     }
    //     fetchdata()
    //    },15000)
    //    return()=>clearInterval(interval)


    
       

      //  useEffect(() => {
      //    client
      //      .fetch(
      //        `*[_type == "product"]{
      //       image{
      //         asset->{
      //           _id,
      //           url
      //         },
      //       },
      //       name,
      //       slug,
      //       price,
      //       details,
      //    }`
      //      )
      //      .then((data) => setProducts(data))
      //      .catch(console.error);
      //  }, []);

      //  useEffect(() => {
      //   client
      //     .fetch(
      //       `*[_type == "banner"]{
      //      image{
      //        asset->{
      //          _id,
      //          url
      //        },
      //      },
      //      buttonText,
      //      product,
      //      desc,
      //      smallText,
      //      midText,
      //      largeText1,
      //      largeText2,
      //      discount,
      //      saleTime,
      //   }`
      //     )
      //     .then((data) => setBannerData(data))
      //     .catch(console.error);
      //     console.log(bannerData)
      // }, []);
    //    useEffect(async () => {
    //     const query = '*[_type == "projects"]'
    //     const product = await client.fetch(query)

    //     client.fetch(query)
    //       .then((data) => setProducts(data))
    // }, [])
    
    const [products, setProducts] = useState([])
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const query = '*[_type == "product"]'; // Modify this query based on your schema
          const productResult = await client.fetch(query);
          setProducts(productResult);
          const bannerQuery = '*[_type == "banner"]'; // Modify this query based on your schema
          const bannerResult = await client.fetch(bannerQuery);
          setBannerData(bannerResult)
          
        } catch (error) {
          console.error('Error fetching data from Sanity:', error);
        }
      };
  
      fetchData();
    }, []); 

    
  
    
  return (
    // <div className='home'>
    //     <img src={blackguyshirt}></img>
    //     {clothes && <ClothingList clothes={clothes} />} 
    // </div>
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    
    <div className='products-heading'>
        <h2>ATLAS CLOTHING</h2>
        <p>BEST CLOTHING IN THE GAME</p>

    </div>

    <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>
    </>
  )
}


