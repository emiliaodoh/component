import react from  'react'
import Image from '../../images/profilepic.jpg'

function Profilephoto() {
  return (
    <div>
      <img src={Image} alt="image.jpg"  className="center"/>
    </div>
  );
}

export default Profilephoto