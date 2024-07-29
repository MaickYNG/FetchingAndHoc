import { useEffect, useState } from "react";

function Fetching() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id} style={{ width: "35rem", margin: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <img src={product.image}  style={{ width: "150px", height: "150px" }} />
          <h5>{product.title}</h5>
          <h6>Category: {product.category}</h6>
          <p>ID: {product.id}</p>
          <h3>$ {product.price}</h3>
          <p>Rating: {product.rating.rate}</p>
        </div>
      ))}
    </>
  );
}

export default Fetching;