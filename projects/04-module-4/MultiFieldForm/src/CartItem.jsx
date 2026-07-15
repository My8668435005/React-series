import React , {useState} from 'react';
import './CartItem.css';

function CartItem({productName, initialQuantity = 1, price}){


    const [quantity, setQuantity] = useState(initialQuantity);

    const increaseQuantity = () => {
        setQuantity(prevQuant => prevQuant + 1);
    };

    const decreaseQuantity = () => {

    setQuantity(prevQuantity => {
    if (prevQuantity > 1) {
        return prevQuantity - 1;
    } else {
        return 1; 
    }
    });
    };
    

  // Calculate the total price for this item
  const itemTotalPrice = quantity * price;

    return (
    <div className='cart-item'>
    <div className='item-details'>
        <h4>{productName}</h4>
        <p>Price: ${price.toFixed(2)} each</p>
    </div>
    
    <div className='quantity-controls'>
        <button onClick={decreaseQuantity} className='quantity-button'>-</button>
        <span className='quantity-display'>{quantity}</span>
        <button onClick={increaseQuantity} className='quantity-button'>+</button>
    </div>
    
    <div className='item-total'>
        <p>Total: ${itemTotalPrice.toFixed(2)}</p>
    </div>
    </div>
);
}



export default CartItem;