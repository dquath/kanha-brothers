import React from 'react'
import './Printing.css';
import rightArrow from "../../Assets/icons/right-arrow-white.svg";

const Printing = () => {
  return (
    <div className='Printing'>
      <div className='top-part'>
        <div className='heading'>
          <h3>Printing</h3>
        </div>
        <div className='first-desc'>
          <p>Lorem ipsum dolor sit amet consectetur. Cras in et dui facilisis. Dignissim in et ac eu vel. Massa eu odio erat vehicula mi. Id mi dictum id congue nunc enim. Ut quisque varius duis tellus sem et blandit. Sed neque semper sem nunc nisl. Fermentum augue quam feugiat urna egestas convallis.</p>
        </div>
      </div>
      <div className='image-upper'>
        <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
        <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
        <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
      </div>
      <div className='image-lower'>
        <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
        <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
        <img src="https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"/>
      </div>
      <div className='lower-icon'>
        <div className='one'>
          <p>1</p>
        </div>
        <div className='two'>
          <p>2</p>
        </div>
        <div className='arrow-icon'>
          <img src={rightArrow} alt='Right-arrow'/>
        </div>
      </div>
    </div>
  )
}

export default Printing
