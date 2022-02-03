import { useState } from 'react';

const Intro = () => {

  const [ isIntroOpen, setIsIntroOpen ] = useState(true)

  const handleClickCloseIntro = () => {
    setIsIntroOpen(false)
  }

  return (
  <div className={isIntroOpen ? "modal-bg show" : "modal-bg"}>
    <div className={isIntroOpen ? "modal-box show" : "modal-box"}>
      <h2>Hello there,</h2>
      <p>My name is Ákos, and this site you just opened, is my full-stack study project.</p>
      <h4>This app was built by using:</h4>
      <ul>
        <li>Frontend: React.js</li>
        <li>Backend: Node.js</li>
        <li>Database: MongoDB</li>
      </ul>
      <h4>Frontend features:</h4>
      <ul>
        <li>Pixel precision</li>
        <li>State handling &#38; storing with Context</li>
        <li>SASS</li>
        <li>Custom spinner</li>
      </ul>
      <h4>Backend features:</h4>
      <ul>
        <li>Registration &#38; Login with Joi validation</li>
        <li>JSON Web Token authenticaiton</li>
        <li>Session handling</li>
        <li>MongoDB connection w Mongoose</li>
      </ul>
      <p>Thanks for coming...</p>
      <div className="icon-close-bg" onClick={handleClickCloseIntro}>
        <svg class="icon icon-close" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>
      </div>
      {/* <button className="btn btn-cta" onClick={handleClickCloseIntro}>close</button> */}
    </div>
  </div>
    
  );
};

export default Intro;
