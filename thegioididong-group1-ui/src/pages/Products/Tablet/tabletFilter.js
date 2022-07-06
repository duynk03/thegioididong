import styles from './Tablet.module.scss';


export default function FilterTablet() {

    const logoTablet = [
        'https://cdn.tgdd.vn/Brand/1/iPad-(Apple)522-b_4.jpg',
        'https://cdn.tgdd.vn/Brand/1/samsungnew-220x48-3.png',
        'https://cdn.tgdd.vn/Brand/1/Tablet-xiaomi-220x48-1.png',
        'https://cdn.tgdd.vn/Brand/1/Lenovo522-b_6.jpg',
        'https://cdn.tgdd.vn/Brand/1/Masstel522-b_7.png',
        'https://cdn.tgdd.vn/Brand/1/logonokia-220x48-1.jpg',
        'https://cdn.tgdd.vn/Brand/1/Huawei522-b_4.jpg',
        'https://cdn.tgdd.vn/Brand/1/logoalcatel-220x48-1.png'
    ];

    const titleFilter = [
        'Hãng',
        'Giá',
        'Màn hình',
        'RAM',
        'Bộ nhớ trong',
        'Tính năng đặc biệt'
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
                {logoTablet.map((item) => (
                    <div className={styles.logo__tablet}>
                        {/* eslint-disable-next-line */}
                        <a href='javascript:void(0)' className={styles.logo__tablet__manu}>
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