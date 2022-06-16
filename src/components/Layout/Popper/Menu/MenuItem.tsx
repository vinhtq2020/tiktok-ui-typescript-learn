import classNames from "classnames/bind";
import { Button } from "components/Button";
import styles from './menu.module.scss'
interface Props {
    data: MenuItemModel;
    onClick:()=>void
}
export interface MenuItemModel {
    icon?: React.ReactNode,
    title?: string,
    to?: string,
    children?: MenuItemModel,
    data?:Array<any>,
    onClick?: () => void,
    type?:string
}
const cx = classNames.bind(styles);
export function MenuItem({ data, onClick }: Props) {

    return (
        <Button leftIcon={data.icon} className={cx('menu-item')} to={data.to} onClick={onClick}>{data.title}</Button>
    )
}