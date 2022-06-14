import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { images } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
const cx = classNames.bind(styles);
function Header() {
    
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                    <img src={images.logo} alt="" />
                <div className={cx('search')}>
                    <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
        <FontAwesomeIcon icon={faCircleXmark as IconProp} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner as IconProp} className={cx("loading")}></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass as IconProp}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    )
}

export default Header;