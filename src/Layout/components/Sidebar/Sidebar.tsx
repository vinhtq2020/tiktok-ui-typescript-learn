import classNames from "classnames/bind";
import { storage } from "../../../common/uione";
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from "../../../components/Icons";
import { Menu, MenuItem } from "./Menu";
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function Sidebar(){
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem title="For You" to={storage.getRoutes().home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={storage.getRoutes().following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                <MenuItem title="LIVE" to={storage.getRoutes().live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
            </Menu>
        </aside>
    )
}

export default Sidebar;