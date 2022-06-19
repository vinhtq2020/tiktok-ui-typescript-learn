import classNames from 'classnames/bind';
import React from 'react';
import { Link, To } from 'react-router-dom';
import styles from './Button.module.scss';

interface Props {
    to?: To,
    href?: string,
    onClick?: () => void,
    children: React.ReactNode,
    primary?: boolean,
    outline__primary?: boolean,
    outline__secondary?: boolean,
    small?: boolean,
    large?: boolean,
    text?: boolean,
    disabled?: boolean,
    rounded?: boolean,
    className?: string,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
}
const cx = classNames.bind(styles);
export const Button = React.forwardRef<any, Props>(({ href,
    children,
    to,
    primary = false,
    outline__primary = false,
    outline__secondary = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    className = '',
    rounded = false,
    leftIcon,
    rightIcon, onClick, ...passProps }, ref) => {
    const props = {
        onClick,
        ...passProps
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline__primary,
        outline__secondary,
        small,
        large,
        text,
        disabled,
        rounded,
        leftIcon,
        rightIcon
    });

    if (disabled) {
        delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof key === "function") {
                delete props[key];
            }
        })
    }

    if (!href && !to) {

        return (
            <button className={classes} {...props} ref={ref}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

            </button>
        )
    }
    if (href && !to) {
        return (

            <a className={classes} {...props} href={href} ref={ref}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

            </a>

        )
    }
    if (!href && to) {
        return (
            <Link className={classes} {...props} to={to} ref={ref}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Link>
        )
    }
    return null;

})