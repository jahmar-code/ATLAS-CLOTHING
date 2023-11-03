import './ClothingList.css'

import { useState } from 'react'
import React from 'react'

import { db, storage } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

import blackguyshirt from '../assets/images/blackguyshirt.jpeg'

export default function ClothingList({ clothes }) {
    
    return (
        <div className='clothing-list'>
            {clothes.map(clothes => (
                    <div key={clothes.id} className='card'>
                    
                    <h3>{clothes.title}</h3>
                    <p>{clothes.price}</p>
                </div>
            ))}

        </div>
    )
}
