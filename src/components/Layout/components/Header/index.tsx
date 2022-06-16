import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faSignOut, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { images } from 'assets/images';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from 'components/Layout/Popper';
import { AccountItem } from 'components/AccountItem';
import { Button } from 'components/Button';
import { Menu } from 'components/Layout/Popper/Menu';
import { MenuItemModel } from 'components/Layout/Popper/Menu/MenuItem';
import 'tippy.js/dist/tippy.css'
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
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 3000)
    })
    const handleMenuChange = (menuItem: MenuItemModel) => {
        switch (menuItem.type) {
            case 'language': break;
            default: break;

        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser as IconProp} />,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins as IconProp} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear as IconProp} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut as IconProp} />,
            title: 'Log out',
            to: '/Logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="" />
                <HeadlessTippy visible={searchResult.length > 0} interactive
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
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} trigger='click' content="Upload video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload as IconProp} />
                                </button>
                            </Tippy>
                        </>
                    )
                        : (
                            <>
                                <Button text >Upload</Button>
                                <Button primary={true}>Login</Button>
                            </>
                        )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img className={cx('user-avatar')} alt="Hà Lan" src={"https://i1-thethao.vnecdn.net/2022/06/16/tf503091-2-1956-1655337433.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=hS6llP4MagvCIR9_WfcEkA"} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical as IconProp} />
                            </button>
                        )
                        }
                    </Menu>
                </div>
            </div>
        </header >
    )
}

export default Header;