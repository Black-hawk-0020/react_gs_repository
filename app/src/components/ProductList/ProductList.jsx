import ProductCard from "./ProductCard";
function ProductList() {
  const products = [
    {
      id: 1,
      name: "Ноутбук",
      category: "Техніка",
      price: 23000,
      completed: true,
    },
    {
      id: 2,
      name: "Навушники",
      category: "Аксесуари",
      price: 2450,
      completed: true,
    },
    {
      id: 3,
      name: "Клавіатура",
      category: "Аксесуари",
      price: 400,
      completed: true,
    },
  ];
  return (
    <div className="products-list">
      <h1>Список товарів</h1>
      <div>
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
export default ProductList;
