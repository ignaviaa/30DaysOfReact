import { Parallax } from 'react-parallax';
import tokyo from "../assets/tokyo.jpeg"

const ImageOne = () => (
    <Parallax className='image' bgImage={tokyo}  strength={100}>
        <div className="conatiner">
        <div className="content">
            <span className="imgtxt">
         A TRIP TO JAPAN
        </span>
        </div>
        </div>
    </Parallax>
);

export default ImageOne;