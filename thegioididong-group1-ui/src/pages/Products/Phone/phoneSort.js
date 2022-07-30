import React, {useState} from 'react';
import styles from './Phone.module.scss';
import clsx from 'clsx';

export default function PhoneSort (){

    const [displaySort, setDisplaySort] = useState(clsx(styles.sort__select__main, styles.sort__hidden));

    const [hidden, setHidden] = useState(false);

    return(
        <div className={styles.sort__container}>
            <p className={styles.sort__total}>
                <b className={styles.sort__total__item}>
                    90&nbsp;Điện thoại
                </b>
            </p>
            <div className={styles.select__sort} onClick={() =>{
                setHidden(!hidden)
                if(displaySort.includes('hidden')){
                    setDisplaySort(clsx(styles.sort__select__main, styles.sort__visible));
                }else{
                    setDisplaySort(clsx(styles.sort__select__main, styles.sort__hidden));
                }
            }}>
                <p className={styles.sort__content}>Xếp theo:&nbsp;
                    <span className={styles.sort__show}>
                        Nổi bật&nbsp;<i className={clsx(styles.select__sort__icon,'fas fa-sort-down')}></i>
                    </span>
                </p>
                <div className={displaySort}>
                    <p>
                        {/* eslint-disable-next-line */}
                        <a className={styles.check__sort} href='javascript:void(0)'>
                            <i></i>
                            Nổi bật
                        </a>
                    </p>
                    <p>
                        {/* eslint-disable-next-line */}
                        <a className='' href='javascript:void(0)'>
                            <i></i>
                            Giá từ cao đến thấp
                        </a>
                    </p>
                    <p>
                        {/* eslint-disable-next-line */}
                        <a className='' href='javascript:void(0)'>
                            <i></i>
                            Giá từ thấp đến cao
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
