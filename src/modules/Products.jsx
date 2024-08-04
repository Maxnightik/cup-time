import { useEffect } from "react";
import { Product } from "./Product";
import { useProducts } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import { SkeletonLoaderr } from "./SkeletonLoaderr";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory, categories } = useProducts();
  const category = searchParams.get("category");

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  const categoryTitle = categories[category] || "Товары";

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{categoryTitle}</h2>

        <ul className="products__list">
          {products.length ? (
            products.map((item) => <Product key={item.id} data={item} />)
          ) : (
            <SkeletonLoaderr />
          )}
        </ul>
      </div>
    </section>
  );
};
