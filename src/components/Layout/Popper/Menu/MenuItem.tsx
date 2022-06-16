import classNames from "classnames/bind";
import { Button } from "components/Button";
import styles from './menu.module.scss'
interface Props {
    data: MenuItemModel;
}
export interface MenuItemModel {
    icon: React.ReactNode,
    title?: string,
    to?: string
}
const cx = classNames.bind(styles);
export function MenuItem({ data }: Props) {

    return (
        <Button leftIcon={data.icon} className={cx('menu-item')} to={data.to}>{data.title}</Button>
    )
}