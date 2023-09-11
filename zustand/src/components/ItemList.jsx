/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import useStore from '../app/store'

const ItemList = () => {
    const { items, addItem, removeItem, toggleItemStatus } = useStore(
        (state) => ({
            items: state.items,
            removeItem: state.removeItem,
            toggleItemStatus: state.toggleItemStatus,
        })
    )
    return (
        <>
            <ul>
                {items.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            <li className={`course-item`}
                                style={{
                                    backgroundColor: item.completed ? "#ff0044" : "white",
                                    color: "black"
                                }}>
                                <span className='course-item-col-1'>
                                    <input
                                        checked={item.completed}
                                        onChange={(e) => {
                                            toggleItemStatus(item.id)
                                        }}
                                        type="checkbox" name="" id="" />

                                </span>
                                <span>{item?.title}</span>
                                <button
                                    onClick={() => {
                                        removeItem(item.id)
                                    }}
                                    className="delete btn">
                                    Delete
                                </button>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>

        </>
    )
}

export default ItemList