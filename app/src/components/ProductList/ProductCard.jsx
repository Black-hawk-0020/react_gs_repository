function ProductCard(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>Category: {props.category}</p>
      <p>Price: {props.price}</p>
      <p>{props.completed ? "в наявності" : "Немає в наявності"}</p>
    </>
  );
}
export default ProductCard;
