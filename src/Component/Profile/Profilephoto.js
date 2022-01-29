import react from  'react'
import Image from './images/profilepic.jpg'

function Profilephoto() {
  return (
    <div>
    <h1 className="red">
      Emilia</h1>
   
      <img src={Image} alt="image.jpg" height="100" width="200"/>
   
    </div>
  );
}

export default Profilephoto