import styles from './Home.module.scss';

function BigBanner() {
    return (
        <div className={styles.big__banner}>
            {/* eslint-disable-next-line */}
            <span aria-label="slide" className={styles.span__img}>
                <img
                    className={styles.banner__image}
                    width="1920"
                    height="450"
                    src="/images/Banner-Big-1920x450-1920x450.jpg"
                    alt="Banner Big Campaign"
                />
            </span>
        </div>
    );
}

export default BigBanner;
