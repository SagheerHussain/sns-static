import React, { useEffect, useRef, useState } from 'react';

const EyeRotate = ({
    w_1 = "w-[130px] sm:w-[200px] md:w-[250px]",
    w_2 = "w-[90px] sm:w-[130px] md:w-[150px]",
    h_1 = "h-[130px] sm:h-[200px] md:h-[250px]",
    h_2 = "h-[90px] sm:h-[130px] md:h-[150px]",
    margin="mt-[100px] -mb-[100px]"
}) => {

    const rotatingLeftEyeRef = useRef(null);
    const rotatingRightEyeRef = useRef(null);
    const animationFrameId = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (animationFrameId.current) return; // throttle updates
            animationFrameId.current = requestAnimationFrame(() => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const deltaX = mouseX - window.innerWidth / 2;
                const deltaY = mouseY - window.innerHeight / 2;
                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
                if (rotatingLeftEyeRef.current) {
                    rotatingLeftEyeRef.current.style.transform = `translate(-50%, -50%) rotate(${angle - 180}deg)`;
                }
                if (rotatingRightEyeRef.current) {
                    rotatingRightEyeRef.current.style.transform = `translate(-50%, -50%) rotate(${angle - 180}deg)`;
                }
                animationFrameId.current = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <div className={`eye_feature flex items-center justify-center ${margin}`}>

            <div className={`eye_rotate ${w_1} ${h_1} rounded-full bg-[#fff] me-10`}>
                <div className={`eye_dark_circle ${w_2} ${h_2} relative left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#000]`}>
                    <div
                        ref={rotatingLeftEyeRef}
                        className="eye_dark_circle absolute left-1/2 top-1/2 w-full"
                        style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}
                    >
                        <div className='w-[30px] h-[30px] rounded-full bg-[#fff]'></div>
                    </div>
                </div>
            </div>
            <div className={`eye_rotate ${w_1} ${h_1} rounded-full bg-[#fff] me-10`}>
                <div className={`eye_dark_circle ${w_2} ${h_2} relative left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#000]`}>
                    <div
                        ref={rotatingRightEyeRef}
                        className="eye_dark_circle absolute left-1/2 top-1/2 w-full"
                        style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}
                    >
                        <div className='w-[30px] h-[30px] rounded-full bg-[#fff]'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EyeRotate
