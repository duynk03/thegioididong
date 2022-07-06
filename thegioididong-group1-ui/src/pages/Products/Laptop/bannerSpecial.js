import styles from './Laptop.module.scss';

export default function BannerSpecial() {

    const bannerSpecialImg = [
        'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu10-576x310.jpg',
        'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu9-576x310.jpg',
        'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu5-576x310.jpg',
        'https://cdn.tgdd.vn/2021/08/banner/Chuyentrangthuonghieu7-576x310.jpg'
    ];

    return(
        <div className={styles.banner__special}>
            <div className={styles.banner__special__container}>
                <strong className={styles.brands__title}>Chuyên trang thương hiệu</strong>
                <div className={styles.brands__show}>
                    {bannerSpecialImg.map((item) => (
                        <a className={styles.brands__container} href='#'>
                            <div className={styles.brands__content}>
                                <img className={styles.brands__element} src={item} alt=''/>
                            </div>
                        </a>
                    ))}
                </div>  
            </div>
        </div>
    );

}