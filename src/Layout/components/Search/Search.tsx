import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { User, useUser } from '../../../service';
import { AccountItem } from '../../../components/AccountItem';


const cx = classNames.bind(styles);
export const Search = () => {
    const [showResult, setShowResult] = useState(true);
    const [keyword, setKeyword] = useState('');
    const [searchResult, setSearchResult] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const debounce = useDebounce(keyword, 500);
    const service = useUser();
    useEffect(() => {
        if (!debounce.trim()) { setSearchResult([]); return; };
        setLoading(true);
        // axios.get('https://tiktok.fullstack.edu.vn/api/users/search', {
        //     params: {
        //         q: debounce,
        //         type: 'less'
        //     }
        // })
        service.search({ q: encodeURIComponent(debounce), type: "less" })
            .then(res => {
             setSearchResult(res.data);
              setLoading(false) })
            .catch(() => setLoading(false));

    }, [debounce])

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setKeyword(searchValue);
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

    const handleSubmit = (e:React.MouseEvent<Element,MouseEvent>)=>{
        e.preventDefault();
    }
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by 
        // creating a new parentNode context.
        <div>
            <HeadlessTippy  visible={searchResult.length > 0 && showResult} interactive
                render={attrs => (
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((item, index: number) => {
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
                        <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} onMouseDown={(e)=>{handleSubmit(e)}}></FontAwesomeIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}