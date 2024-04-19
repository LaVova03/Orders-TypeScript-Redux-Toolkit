import styles from './BodyProducts.module.css';
import { products } from '../../data';
import { useTranslation } from "react-i18next";

const BodyProducts = ({ isSelectSpecification, isSelectType }) => {
    const { t } = useTranslation();
    return (
        <div>
            {products.map((el, index) => (
                (el.type === isSelectType) || (el.specification === isSelectSpecification) ||
                    ((isSelectType === 'All') && (isSelectSpecification === 'All')) ? (
                    <ul key={index} className={styles.body__products__ul}>
                        <li>
                            <img src={el.photo} alt='logo' />
                        </li>
                        <li>{el.title}</li>
                        <li>{el.type}</li>
                        <li className={styles.data_guarantee}>
                            <div>
                                <div>{t("с")} {el.guarantee.start}</div>
                                <div>{t("по")} {el.guarantee.end}</div>
                            </div>
                        </li>
                        <li className={styles.data_price}>
                            <ul>
                                <li>{el.price[0].value}{el.price[0].symbol}</li>
                                <li>{el.price[1].value}{el.price[1].symbol}</li>
                            </ul>
                            <div>
                                {t("заказ")} {el.order}
                            </div>
                        </li>
                    </ul>
                ) : null
            ))}
        </div>
    );
};

export default BodyProducts;
