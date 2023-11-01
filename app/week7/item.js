


const Item = ({ name, quantity, category }) => {
    return (

<ul>
  <li class="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
  <h2 class="text-xl font-bold">$name</h2>
  </li>
</ul>


    );
  };
  
  export default Item;