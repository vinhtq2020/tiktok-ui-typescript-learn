import { forwardRef, LegacyRef, Ref, useImperativeHandle, useRef } from 'react'
import video1 from './videos/video-1.mp4'

interface Props {

}
function Video(props: Props, ref: any) {
    const videoRef = useRef<any>();
    useImperativeHandle(ref, () => ({
        play(){
            if (videoRef.current) {
                videoRef.current.play();
            }
        },
        pause() {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        },
    }))
    return (
        <video src={video1} width={280} ref={videoRef} />
    )
}

export default forwardRef(Video);

