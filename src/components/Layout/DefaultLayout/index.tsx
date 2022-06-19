import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss';
import classNames from "classnames/bind";
import { Header } from "../components";
type Props={
    children?: React.ReactNode;
}
const cx = classNames.bind(styles);
export const DefaultLayout = ({ children }: Props) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <h2 className={cx('content')}>{children}</h2>
            </div>
        </div>
    )
}