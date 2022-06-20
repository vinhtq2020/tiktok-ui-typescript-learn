import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
}

export const Menu = ({ children }: Props) => {
    return (
        <nav className={cx('menu')}>
            {children}
        </nav>
    )
}