import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { images } from 'assets/images';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from 'components/Layout/Popper';
import { AccountItem } from 'components/AccountItem';
import { Button } from 'components/Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState<any>([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 3000)
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="" />
                <Tippy visible={searchResult.length > 0} interactive={true}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            </PopperWrapper>
                        </div>
                    )} >
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
                </Tippy>
                <div className={cx('actions')}>
                <Button text >Upload</Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header >
    )
}

export default Header;