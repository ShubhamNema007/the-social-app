import './App.scss';
import Description from './components/Description/Description';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Card from './components/Card/Cards';
import Additionalservice from './components/Additionalservice/Additional';
import Footer from './components/Footer/Footer';
import { image } from './Config/Image';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description />
      <section className='transcription-tool'>
        <div className='container'>
          <h3 className="cards-main-heading">
            How the Transcription Tool Works
          </h3>
          <div className='cards'>
            <Card
              imgcard={image.cardone}
              cardheading="Upload Response Recording"
              cardpara="Take a screen recording of the Q&A responses from your phone"
            />
            <Card
              imgcard={image.cardtwo}
              cardheading="Transcription in Process"
              cardpara="Our tool will transcribe and sort the responses by user (typically in minutes)"
            />
            <Card
              imgcard={image.cardthree}
              cardheading="Download File"
              cardpara="You'll receive and email notification when your CSV file is ready for export"
            />
          </div>
        </div>
      </section>
      <section className='additional-service-section'>
        <div className="container">
          <div className="additional-service">
            <div className="additional-service-heading">
              <h3 className="cards-main-heading">
                Additional Services
              </h3>
            </div>
            <div className="additional-service-cards">
              <div className="additional-cards-col">
                <Additionalservice
                  imgadditional={image.mobile}
                  additionalhead=" engagement strategies &
                response analysis"
                  additionalpara=" Unsure of how to engage with polls and question boxes? Or need help analyzing your
                responses
                to make a more meaningful connection? We offer consulting and analytic services to
                improve
                your Instagram Stories presence and content creation."
                  button="Contact"
                />
              </div>
              <div className="additional-cards-col">
                <Additionalservice
                  imgadditional={image.laptopimage}
                  additionalhead=" Annual Audience Surveys"
                  additionalpara=" Unsure of how to engage with polls and question boxes? Or need help analyzing your responses to make a more meaningful connection? We offer consulting and analytic services to improve your Instagram Stories presence and content creation. ."
                  button="Contact"
                />
              </div>
              <div className="additional-cards-col">
                <Additionalservice
                  imgadditional={image.herocardimg}
                  additionalhead=" Question host opportunities"
                  additionalpara=" Unsure of how to engage with polls and question boxes? Or need help analyzing your responses to make a more meaningful connection? We offer consulting and analytic services to improve your Instagram Stories presence and content creation. ."
                  button="Contact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div >
  );
}

export default App;
