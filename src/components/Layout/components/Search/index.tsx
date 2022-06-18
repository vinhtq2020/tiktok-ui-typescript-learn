import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from 'components/Layout/Popper';
import { AccountItem } from 'components/AccountItem';
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { User } from 'service/User';

const cx = classNames.bind(styles);
export const Search = () => {
    const [showResult, setShowResult] = useState(true);
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
            if(!keyword.trim()){setSearchResult([]);return;};
            setLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(keyword)}&type=less`).then((res) => {
                return res.json()
            }).then(res => {setSearchResult(res.data);setLoading(false)}).catch(()=>setLoading(false));
        
    }, [keyword])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e) {
            setKeyword(e.target.value);
        }
    }
    const handleClear = () => {
        setKeyword("");
        setSearchResult([]);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    const handleHideResult = () => {
        setShowResult(false);
    }
    return (
        <>
            <HeadlessTippy visible={searchResult.length > 0 && showResult} interactive
            render={attrs => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((item,index:number) => {
                            return (<AccountItem key={index} data={item}></AccountItem>)
                        })}


                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
            >
            <div className={cx('search')}>
                <input ref={inputRef} type="text" value={keyword} onChange={(e) => handleChangeInput(e)} onFocus={() => setShowResult(true)} placeholder='Search accounts and videos' spellCheck={false} />
                {!!keyword && !loading && (<button className={cx('clear')} onClick={() => handleClear()}>
                    <FontAwesomeIcon icon={faCircleXmark as IconProp} />
                </button>)
                }
                {loading && <FontAwesomeIcon icon={faSpinner as IconProp} className={cx("loading")}></FontAwesomeIcon>}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass as IconProp}></FontAwesomeIcon>
                </button>
            </div>
        </HeadlessTippy>
        </>
    )
}