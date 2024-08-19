import React from "react";
import styles from "./ProductsBody.module.css";
import { products } from "../../data";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import BodyProducts from "../BodyProducts/BodyProducts";

const Products = () => {
  const { t } = useTranslation();

  const [isType, addType] = useState<Set<string>>(new Set());
  const [isSpecification, addSpecification] = useState<Set<string>>(new Set());

  const [isSelectType, setSelectType] = useState<string>("All");
  const [isSelectSpecification, setSelectSpecification] =
    useState<string>("All");

  useEffect(() => {
    const uniqueTypes = new Set(products.map((product) => product.type));
    uniqueTypes.add("All");
    addType(uniqueTypes);

    const uniqueSpecifications = new Set(
      products.map((product) => product.specification)
    );
    uniqueSpecifications.add("All");
    addSpecification(uniqueSpecifications);
  }, []);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectType(e.target.value);
  };

  const handleSpecificationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectSpecification(e.target.value);
  };

  return (
    <div className={styles.header__products}>
      <ul>
        <li>
          {t("Продукты")} / {products.length}
        </li>
        <li className={styles.products__selector}>
          <label>{t("Тип:")}</label>
          <select value={isSelectType} onChange={handleTypeChange}>
            {[...isType].map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>
        </li>
        <li className={styles.products__selector}>
          <label>{t("Спецификация:")}</label>
          <select
            value={isSelectSpecification}
            onChange={handleSpecificationChange}
          >
            {[...isSpecification].map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>
        </li>
      </ul>
      <BodyProducts
        isSelectType={isSelectType}
        isSelectSpecification={isSelectSpecification}
      />
    </div>
  );
};

export default Products;
