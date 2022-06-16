import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from "../Wrapper";
import { JSXElementConstructor, ReactElement } from "react";
import { MenuItem, MenuItemModel } from "components/Layout/Popper/Menu/MenuItem";
interface Props {
    children?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
    items?: MenuItemModel[];
}

const cx = classNames.bind(styles);

export function Menu({ children, items = [] }: Props) {
    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive = {true}
            delay={[0,700]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )} 

            >
            {children}
        </Tippy>
    )
}