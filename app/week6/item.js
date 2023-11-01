


const Item = ({ name, quantity, category }) => {
    return (
      <li className="border p-2 mb-2 rounded-lg shadow-md">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-gray-500">Category: {category}</div>
        <div className="text-gray-500">Quantity: {quantity}</div>
      </li>
    );
  };
  
  export default Item;