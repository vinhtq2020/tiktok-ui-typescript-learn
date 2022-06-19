import classNames from "classnames/bind"
import React from "react";
import styles from './Popper.module.scss';
interface Props {
    children?: React.ReactNode;
    className?: string;
}
const cx = classNames.bind(styles)
export function Wrapper({ children, className }: Props) {
    return (
        <div className={cx("wrapper", className)}>{children}</div>
    )
}