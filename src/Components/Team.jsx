import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import Bottom from './Bottom.jsx'
import Card from './Card.jsx';
import './Team.css'
import Header from './header';

function Team(){
    return(
    <div className="zcss">
   
        <div class="Teamtopcss">
        <div style={{backgroundColor: '#0072ff'}}>
         <Header />
        </div>
           
         <h2>Team of Summer of Innovation</h2>
        </div>
        <h3 className="h3class">ORGANIZER :</h3>
         <MDBRow className="row">
           <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Atul.jpg' title="ATUL" email="gstech@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">WEB-TEAM: </h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Rudraksh.jpeg' title="RUDRAKSH" email="190030038@iitdh.ac.in"/></MDBCol>
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Saurabh.jpg' title="SAURABH" email="190030036@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">DESIGN TEAM:</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Aasim.jpg' title="AASIM ALI KHAN" email="190010001@iitdh.ac.in"/></MDBCol>
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Chirag.jpg' title="CHIRAG J MARAGAL" email="190020014@iitdh.ac.in"/></MDBCol>
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Sameer.jpg' title="MOHAMMAD SAMEER" email="190010024@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">WEB-DEV PROBLEM STATEMENT TEAM: </h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Yusuf.jpg' title="YUSUF TURABI" email="190030049@iitdh.ac.in"/></MDBCol>
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Harshraj.jpg' title="HARSH RAJ" email="180010017@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">CASE STUDY PROBLEM STATEMENT TEAM:</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Harsha.jpg' title="MUMMANENI SAI HARSHA" email="180030026@iitdh.ac.in"/></MDBCol>
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Veekshita.jpg' title="VEEKSHITA NAIDU BALLA" email="200030010@iitdh.ac.in"/></MDBCol>
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Dharani.jpg' title="DHARANI SAMSRITHA PASUMARTHI" email="200030039@iitdh.ac.in"/></MDBCol>
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Nandini.jpg' title="NANDINI D" email="200030036@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">CODECHEF CHAPTERS TEAM</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/1.jfif' title="SHIVAM CHATURVEDI " email="180010032@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">TWITTER BOT FOR IPL UPDATES TEAM</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Akhilesh.png' title="BHARADWAJ AKHILESH" email="180010009@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">OBJECT DETECTION TEAM</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Janhavi.png' title="JANHAVI DADHANIA" email="180010009@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">SENTIMENT OF TEXT TEAM</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Harshraj.jpg' title="HARSH RAJ" email="180010009@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">IMAGE CLASSIFICATION TEAM</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/Akhilesh.png' title="BHARADWAJ AKHILESH" email="180010009@iitdh.ac.in"/></MDBCol>
         </MDBRow>

         <h3 className="h3class">ROBOTICS PROBLEM STATEMENT TEAM</h3>
         <MDBRow className="row">
            <MDBCol size="12" lg="3" md="4" sm="6" className="column"><Card url='./Images/Team Images/1.jfif' title="SOHAN ANISETTY" email="180030040@iitdh.ac.in"/></MDBCol>
         </MDBRow>         
        
        <Bottom />
    </div>
    );
}
export default Team;