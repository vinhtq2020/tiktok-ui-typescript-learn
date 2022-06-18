import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faPlus, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { images } from 'assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button } from 'components/Button';
import { Menu } from 'components/Layout/Popper/Menu';
import { MenuItemModel } from 'components/Layout/Popper/Menu/MenuItem';
import 'tippy.js/dist/tippy.css'
import { Image } from 'components/Image';
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Search } from '../Search';

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
   
    
    
    const currentUser = true;
    
   
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
                <Search/>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} trigger='click' content="Upload video" placement='bottom'>
                                <Button outline__secondary leftIcon={<FontAwesomeIcon icon={faPlus as IconProp} />}>
                                    Upload
                                </Button>
                            </Tippy>
                            <Tippy delay={[0, 200]} trigger='click'  placement='bottom' content="Messenger">
                                <button className={cx('action-btn')}><FontAwesomeIcon icon={faPaperPlane as IconProp}/></button>
                            </Tippy>
                            <Tippy delay={[0, 200]} trigger='click'  placement='bottom' content="Inbox">
                                <button className={cx('action-btn')}><FontAwesomeIcon icon={faMessage as IconProp}/></button>
                            </Tippy>
                        </>
                    )
                        : (
                            <>
                                <Button outline__secondary leftIcon={<FontAwesomeIcon icon={faPlus as IconProp} />}>Upload</Button>
                                <Button primary={true}>Login</Button>
                            </>
                        )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} alt="Hà Lan" src={""} />
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