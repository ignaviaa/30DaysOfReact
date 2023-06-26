import { Parallax } from 'react-parallax';
import ramen from "../assets/ramen.jpeg"

const ImageTwo = () => (
    <Parallax className='image2' bgImage={ramen}  strength={500}>
        <div className="conatiner">
        <div className="content">
            <span className="imgtxt">
                TRIP TO JAPAN
        </span>
        </div>
        </div>
    </Parallax>
);

export default ImageTwo;