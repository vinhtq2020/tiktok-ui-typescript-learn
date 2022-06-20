import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
interface Props {
    title: string;
    to: string;
    icon: React.ReactNode | null;
    activeIcon:React.ReactNode | null;
}

const cx = classNames.bind(styles);
export const MenuItem = ({ title, to, icon, activeIcon }: Props) => {
    return (
        <NavLink to={to} className={(prop)=>cx('menu-item',{active:prop.isActive})}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    )
}