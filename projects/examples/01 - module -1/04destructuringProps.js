// Functional Component with Destructuring
function ProductCard({ title, price, imageUrl }) {
  return (
    <div className='product-card'>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
}

// Parent Component Usage:
// <ProductCard title='Awesome Gadget' price={99.99} imageUrl='/gadget.jpg' />


