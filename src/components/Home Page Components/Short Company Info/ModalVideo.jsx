import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { FaXmark } from "react-icons/fa6";
import "./info.css";

const ModalVideo = ({
    closeModal,
    isOpen
}) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else document.body.style.overflowY = "scroll";
    }, [isOpen]);

    return (
        <>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        background: "none !important",
                        borderColor: "transparent !important",
                        maxWidth: "100vw",
                        margin: "auto",
                        borderRadius: "0px",
                        padding: "0px",
                    },
                }}
            >
                <div className="modal-video relative h-full flex items-center justify-center">
                    <video src="https://www.digitalsilk.com/wp-content/uploads/2022/07/video.mp4" autoPlay loop muted></video>
                    <div className="modal-video-close absolute top-[10%] right-[5%]">
                        <button className="modal-video-close-icon text-[2.5rem] text-white" onClick={closeModal}><FaXmark /></button>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export default ModalVideo;
