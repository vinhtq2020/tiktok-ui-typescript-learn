import classNames from "classnames/bind";
import { Button } from "../../../Button";
import styles from './Menu.module.scss'

export interface MenuItemModel {
    icon?: React.ReactNode,
    title?: string,
    to?: string,
    children?: MenuItemModel,
    data?: Array<any>,
    onClick?: () => void,
    type?: string,
    separate?:boolean
}

interface Props {
    data: MenuItemModel;
    onClick: () => void
}
const cx = classNames.bind(styles);
export function MenuItem({ data, onClick }: Props) {
    const classes = cx('menu-item',{
        separate:data.separate,
    })
    return (
        <Button leftIcon={data.icon} className={classes} to={data.to} onClick={onClick}>{data.title}</Button>
    )
}