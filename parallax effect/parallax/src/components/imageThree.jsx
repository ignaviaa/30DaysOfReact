import { Parallax } from 'react-parallax';
import shrine from "../assets/shrine.jpeg"

const ImageThree = () => (
    <Parallax className='image' bgImage={shrine}  strength={800}>
        <div className="conatiner">
        <div className="content">
            <span className="imgtxt">
         A TRIP TO JAPAN
        </span>
        </div>
        </div>
    </Parallax>
);

export default ImageThree;