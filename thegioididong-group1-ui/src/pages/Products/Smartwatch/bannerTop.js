import styles from './Smartwatch.module.scss'

export default function BannerTop() {
    
    const bannerTopImg = 'https://cdn.tgdd.vn/2022/06/banner/Banner-top-1920x200.png';

    return(
        <div className={styles.banner__top}>
            <a className={styles.banner__top__link} href='#'>
                <img src={bannerTopImg} className={styles.banner__top__img} />
            </a>
        </div>
    );
}