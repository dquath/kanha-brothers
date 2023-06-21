import React from 'react'
import './Printing.css';
import PrintingCards from '../../components/Service/Single-Service-Printing/PrintingCards';
// import RightArrow from "../../Assets/icons/right-arrow-white.svg";

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
      <div>
        <PrintingCards/>
      </div>
      <div className='lower-icon'>
        <button className='one'>1</button>
        <button>2</button>
        <button></button>
      </div>
    </div>
  )
}

export default Printing
