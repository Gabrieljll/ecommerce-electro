import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
//import icons
import { IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
// import cart context
import {CartContext} from '../../context/CartContext'
import {SidebarContext} from '../../context/SidebarContext'

export const CartItem = ({item}) => {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
    const { handleClose } = useContext(SidebarContext)
    // destrictire ote,
    const {id, nombre, imagen, precio, amount} = item;
    
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* imagen */}
                <Link onClick={handleClose} to={`/product/${id}`}>
                    <img className="max-w-[80px]" src={"data:image/jpeg;base64,"+imagen} alt={nombre} />
                </Link>
                <div className="w-full flex flex-col">
                    {/* nombre & remove icon*/}
                    <div className="flex justify-between mb-2">
                        {/* nombre */}
                        <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
                            {nombre}
                        </Link>
                        {/* remove icon */}
                        <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
                            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                        </div>

                    </div>
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* qty */}
                        <div className="flex flex-1 max-w-[100px items-center h-full border text-primary font-medium">
                            {/* minus icon */}
                            <div onClick={ () => decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                                <IoMdRemove />
                            </div>

                            {/* amount */}
                            <div className=" h-full flex justify-center items-center px-2">
                                {amount}
                            </div>

                            {/*  plus icon */}
                            <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                                <IoMdAdd />
                            </div>
                        </div>

                        {/* item precio */}
                        <div className="flex-1 items-center justify-around">
                            $ {precio}
                        </div>

                        {/* final precio */}
                        {/* make the precio at 2 decimals */}
                        <div className="flex-1 flex justify-end items-center text-primary font-medium">
                            $ {`${parseFloat(precio*amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}