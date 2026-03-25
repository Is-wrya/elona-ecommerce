"use client";

export default function Sort({ products, setProducts }) {

 const handleSort = (value) => {
    let sortedProducts = [...products];

    if (value === "low") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } 
    else if (value === "high") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  return (
   <div className="sort-dropdown">
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
}