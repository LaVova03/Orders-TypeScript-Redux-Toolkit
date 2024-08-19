import styles from "./ProductsPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import Products from "../../components/ProductsBody/ProductsBody";

const ProductsPage = () => {
  const isPage = useSelector((state: RootState) => state.isPage.isPage);

  return (
    <div className={`${styles.products__wrap} ${isPage ? styles.visible : ""}`}>
      <Products />
    </div>
  );
};

export default ProductsPage;
