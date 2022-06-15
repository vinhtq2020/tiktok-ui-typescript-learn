import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
const cx = classNames.bind(styles)
export function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="Hoaa" />
            <div className={cx('info')}>
                <h4>
                    <p className={cx('name')}>
                        <span>Nguyen Van A</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle as IconProp} /></p>

                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>

        </div>
    )
}