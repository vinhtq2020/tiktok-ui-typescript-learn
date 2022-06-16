import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from "../Wrapper";
import { JSXElementConstructor, ReactElement, useState } from "react";
import { MenuItem, MenuItemModel } from "components/Layout/Popper/Menu/MenuItem";
import { HeaderMenu } from "./HeaderMenu";
interface Props {
    children?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
    items?: MenuItemModel[];
    onChange?:(item:any)=>void;
}

const cx = classNames.bind(styles);

export function Menu({ children, items = [],onChange = (item)=>{console.log(item);
} }: Props) {
    const [history, setHistory] = useState<MenuItemModel[]>([{ data: items }]);
    
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data && current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem key={index} data={item} onClick={() => {
                    if (isParent && item.children) {
                        setHistory([...history, item.children ]);
                    }else{
                        onChange(item);
                    }
                }} />
            )
        })
    }

    return (
        <Tippy
            
            interactive={true}
            delay={[0, 700]}
            offset={[12,8]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length>1 && <HeaderMenu title="Language" onBack={()=>{
                            setHistory(history.slice(0,history.length-1));
                            console.log(history);
                            
                        }}></HeaderMenu>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
                        onHide={()=>setHistory(prev=>prev.slice(0,1))}
        >
            {children}
        </Tippy>
    )
}