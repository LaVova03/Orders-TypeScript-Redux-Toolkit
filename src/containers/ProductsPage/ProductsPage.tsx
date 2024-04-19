import styles from "./ProductsPage.module.css";
import Products from "../../components/ProductsBody/ProductsBody";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProductsPage = () => {
  const isPage = useSelector((state: RootState) => state.isPage.isPage)

  return (
    <div className={`${styles.products__wrap} ${isPage ? styles.visible : ""}`}>
      <Products />
    </div>
  );
};

export default ProductsPage;
