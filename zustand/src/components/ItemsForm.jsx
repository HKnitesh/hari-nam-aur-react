/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import useStore from '../app/store'
import '../App.css'

const ItemsForm = () => {
    const addItem = useStore((state) => state.addItem)

    const [itemTitle, setItemTitle] = useState("")
    console.log("Item Form Rendered");

    const handleItemSubmit = () => {
        if (!itemTitle) return alert("Please add a item title");
        addItem({
            id: Math.ceil(Math.random() * 1000000),
            title: itemTitle
        })
        setItemTitle("")
        
    }
    return (
        <div className='form-container'>
            <input
                value={itemTitle}
                onChange={(e) => {
                    setItemTitle(e.target.value)
                }}
                className="form-input" />
            <button
                onClick={() => { handleItemSubmit(); }}
                className='form-submit-btn'>
                add item
            </button>
        </div>
    )
}

export default ItemsForm;