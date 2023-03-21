import React from "react";
import { useEffect, useState, useRef } from "react";

const useRecordVideo = () => {
    const [video, setVideo] = useState(null);
    const refVideo = useRef(null);
    const mediaData = useRef([]);
    const mediaRecorder = useRef(null);
    useEffect(() => {
        refVideo.current = (
            <video width="100%" height="100%" ref={refVideo}>
                <source />
            </video>
        );
        setVideo(refVideo.current);
    }, [])

    const stop = () => {
        if(mediaRecorder.current !== null)
            mediaRecorder.current.stop();
    }

    const record = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({
                audio: true, 
                video: { 
                    width: 1280,
                    hiehgt: 720,
                    frameRate: {ideal: 30, max: 30},
                }
            });
            refVideo.current.srcObject = stream;
            refVideo.current.volume = 0;
            refVideo.current.play();
            console.log(refVideo.current);
            
            mediaData.current = [];
            mediaRecorder.current = new MediaRecorder(stream, {
                mimeType: 'video/webm; codecs=vp9',
                videoBitsPerSecond: 1500000,
            })

            mediaRecorder.current.ondataavailable = (e) => {
                console.log(e.data);
                mediaData.current.push(e.data);
            }

            mediaRecorder.current.onstop = () => {
                console.log(mediaData.current);
                const blob = new Blob(mediaData.current, {type: 'video/webm'});
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'video.webm';
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            }
            mediaRecorder.current.start();
            console.log(mediaRecorder.current);

        } catch (error) {
            alert(error);
        }
    }
    return {video, record, stop}
}

export default useRecordVideo