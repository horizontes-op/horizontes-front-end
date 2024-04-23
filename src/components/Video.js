
import video from "../video/videoAp.mp4";
const Video = () => {
    return (
        <div>
        <video  src={video} alt="Descrição do vídeo"   controls  preload="auto" ></video>{" "}
        </div>
    );
    }
export default Video;