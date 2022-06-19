import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

import { Link } from "react-router-dom"
import { User } from "../../service"
import { Image } from "../Image"

interface Props {
    data: User
}
const cx = classNames.bind(styles)
export function AccountItem({ data }: Props) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <h4>
                    <p className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle as IconProp} />}
                    </p>

                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>

        </Link>
    )
}