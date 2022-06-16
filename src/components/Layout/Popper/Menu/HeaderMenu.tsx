import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind"
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
interface Props {
    title?: string;
    onBack?: () => void;
}
export const HeaderMenu = ({ title, onBack }: Props) => {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft as IconProp} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    )
} 