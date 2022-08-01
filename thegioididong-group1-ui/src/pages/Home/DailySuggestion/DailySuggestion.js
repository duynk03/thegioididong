import styles from '../Home.module.scss';
import SuggestProduct from './SuggestProduct';

function DailySuggestion() {
    const listproduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    return (
        <div className={styles.daily__suggestion}>
            <strong className={styles.name__box}>Gợi ý hôm nay</strong>
            <div className={styles.block__product}>
                <ul className={styles.list__product}>
                    {listproduct.map((product, index) => (
                        <SuggestProduct product={product} index={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DailySuggestion;
