import React, {useState} from 'react';
import styles from './Phone.module.scss';
import clsx from 'clsx';

export default function PhoneSort (){
    const selectSort = [
        'Giảm giá',
        'Góp 0%',
        'Độc quyền',
        'Mới'
    ];

    const [displaySort, setDisplaySort] = useState(clsx(styles.sort__select__main, styles.sort__hidden));

    const [hidden, setHidden] = useState(false);

    return(
        <div className={styles.sort__container}>
            <p className={styles.sort__total}>
                <b className={styles.sort__total__item}>
                    90&nbsp;Điện thoại
                </b>
            </p>
            <div className={styles.checkbox__sort}>
                <div className={styles.box__fast__delivery}>
                    {/* eslint-disable-next-line */}    
                    <a className={styles.fast__delivery} href='javascript:void(0)'>
                        <input className={styles.input__box} type='checkbox' /> &nbsp;
                        <i className={clsx('fas fa-bolt', styles.icon__thunder)}></i>
                        <b className={styles.title__form}>&nbsp;Giao nhanh</b>
                    </a>
                </div>
            {selectSort.map((item) => (
                <div className={styles.box__sort}>
                    {/* eslint-disable-next-line */}
                    <a className={styles.sort__element} href='javascript:void(0)'>
                        <input className={styles.input__element} type='checkbox' />
                        <span>&nbsp;{item}</span>
                    </a>
                </div>
            ))}
            </div>
            {/* <button onClick={() => setHidden(!hidden)}> */}
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
                        Nổi bật
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
                            % Giảm
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
