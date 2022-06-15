import classNames from "classnames/bind"
import React from "react";
import styles from './Popper.module.scss';
interface Props {
    children?: React.ReactNode;
}
const cx = classNames.bind(styles)
export function Wrapper({ children }: Props) {
    return (
        <div className={cx("wrapper")}>{children}</div>
    )
}