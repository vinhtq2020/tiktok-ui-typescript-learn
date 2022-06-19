import classNames from "classnames";
import React, { useState } from "react";
import { images } from "../../assets/images";
import styles from './Image.module.scss';
interface Props extends React.ComponentPropsWithoutRef<'img'> {
    customFallback?:any;
}
export const Image = React.forwardRef<HTMLImageElement, Props>(({ src, alt, className,customFallback = images.noImage, ...props }, ref) => {
    const [fallback,setFallback] = useState<any>('');
    const handleError = () => {
        setFallback(customFallback);
    }
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />
})