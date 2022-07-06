import styles from './Smartwatch.module.scss';

export default function QuickAccess(){

    const accessItem = [
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logo01.png',
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logo02b.png',
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logo03.png',
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logo04-1.png',
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logo05.png',
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logo06.png',
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logoAMZ.png',
        'https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/smartwatch/logo08.png'
    ];

    return(
        <div className={styles.quick__access}>
            {accessItem.map((item) => (
                <div className={styles.access__element}>
                    <a href='#' className={styles.access__item}>
                        <img 
                            src={item}
                            alt=''
                        />                                    
                    </a>
                </div>
            ))}
        </div>
    );
}