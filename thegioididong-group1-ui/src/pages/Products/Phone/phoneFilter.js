import styles from './Phone.module.scss';


export default function FilterPhone() {

    const logoPhone = [
        'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png',
        'https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
        'https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png',
        'https://cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png',
        'https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png',
        'https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg',
        'https://cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg',
        'https://cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg',
        'https://cdn.tgdd.vn/Brand/1/Masstel42-b_0.png'
    ];

    const titleFilter = [
        'Hãng',
        'Giá',
        'Loại điện thoại',
        'Pin & Sạc',
        'RAM',
        'Bộ nhớ trong',
        'Camera',
        'Tính năng đặc biệt',
        'Thiết kế',
        'Màn hình'
    ];

    const downIcon = 'fas fa-caret-down';
    // const upIcon = 'fas fa-caret-up';

    return(
        <div className={styles.session__filter}>
            <div className={styles.filter__item}>
                <div className={styles.total__filter}>
                    <i className='fas fa-filter'></i>
                    <span>&nbsp;Bộ lọc</span>
                </div>
            {titleFilter.map((item) => (
                <div className={styles.title__item}>
                    <span>
                        {item} &nbsp;
                        <i className={downIcon}>
                        </i>
                    </span>
                </div>                      
                ))}
            </div>

            <div className={styles.quick__filter}>
                {logoPhone.map((item) => (
                    <div className={styles.logo__phone}>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' className={styles.logo__phone__manu}>
                            <img 
                                src={item}
                                alt=''
                            />                                    
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}