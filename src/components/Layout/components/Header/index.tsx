import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { images } from 'assets/images';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from 'components/Layout/Popper';
import { AccountItem } from 'components/AccountItem';
import { Button } from 'components/Button';
import { Menu } from 'components/Layout/Popper/Menu';
import { MenuItemModel } from 'components/Layout/Popper/Menu/MenuItem';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia as IconProp} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        data: [
                            {
                                type: 'language',
                                title: 'English 1',
                                children: {
                                    data: [
                                        {
                                            type: 'language', title: 'English 1A'
                                        },
                                        { type: 'language', title: 'English 1B' },
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion as IconProp} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard as IconProp} />,
        title: 'Keyboard shortcuts',
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState<any>([]);
    const handleMenuChange = (menuItem:MenuItemModel)=>{
        switch(menuItem.type){
            case 'language':break;
            default:break;

        }
    }
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 3000)
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="" />
                <Tippy visible={searchResult.length > 0} interactive
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
                    <Button primary={true}>Login</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical as IconProp} />
                        </button>
                    </Menu>




                </div>
            </div>
        </header >
    )
}

export default Header;