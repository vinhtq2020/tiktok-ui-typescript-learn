import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss';
import classNames from "classnames/bind";
type Props = {
    children: JSX.Element;
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

export default DefaultLayout;