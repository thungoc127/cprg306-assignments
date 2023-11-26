


const Item = ({ name, quantity, category, handleSetIngredient }) => {
  return (
    <li onClick={() => handleSetIngredient(name)} className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
      <div className="text-xl font-bold">{name}</div>
      <div className="text-gray-500">Category: {category}</div>
      <div className="text-gray-500">Quantity: {quantity}</div>
    </li>
  );
};

export default Item;