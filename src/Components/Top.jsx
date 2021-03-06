import React from 'react';
import { MDBJumbotron, MDBContainer } from "mdbreact";
import "./Top.css";
import Event from './Events.jsx'
import Header from './header';


function Top(){
    return(
      <div >
        
        <div className="topcss">
           <Header />
           <div className="white3d2"></div> 
           <div className="white3d"></div>
           <h2>Summer of <br />
           Innovation<br />
           2021</h2>

           <h4>This Summer Conquer your fallacies <br />and carve your finesse</h4>

           <img src={('./Images/creative.png')} className="imagecss" alt="image not found"></img>
        </div>

        <MDBJumbotron fluid>
          <MDBContainer>
           <h2 className=" text-center display-4 pt-3 m-5 font-bold ovcss">Overview</h2>
           <p className="pccss text-center lead mx-5 mb-5"><b>The second edition of Summer of Innovation is a platform for honing one’s technical skills and promoting 
           tech culture in our institute. Lasting 3 months, the event comprises of problem statements from multiple 
           domains and the participants are allowed to take part in any number of them. The event is a result of the 
           contribution of about every technical organization involved with tech in our institute. This year, the event 
           shall last from 12th of May to 12th of August, for a period of 3 months allowing the participants to learn the 
           required technical skills from scratch and them implementing them in this period.</b></p>
          </MDBContainer>
        </MDBJumbotron>

        <Event />
      </div>
    )
  }

  export default Top;