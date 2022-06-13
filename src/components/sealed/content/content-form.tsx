import React, { useEffect, useState } from "react";
import './style.css'
export const Content = () => {
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = ()=>{
            if(window.scrollY >= 200){
                setShowGoToTop(true)
            }else{
                setShowGoToTop(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return () =>{
            window.removeEventListener('scroll',handleScroll)
        }
    })
    return (
        <>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus hic rem porro pariatur culpa? Esse numquam aliquid officia commodi minima voluptatem maiores. Accusamus deleniti cum, obcaecati assumenda veritatis cumque!
            </div>
            {showGoToTop && (
                <button className="btn__go-top">
                    Go To Top
                </button>
            )}
        </>
    )
}