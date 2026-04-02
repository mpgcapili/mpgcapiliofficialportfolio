import './aboutme.css';
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from 'react';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import Footer from '../components/Footer';

type BoxesProps = {
  title: string,
  children: React.ReactNode;
}


const Boxes = ({ title, children }: BoxesProps): any => (
  <>
    <div className='boxes'>
      <h3>{title}</h3>
      {children}
    </div >
  </>
)

const AboutMe = () => {
  useEffect(() => {
    /* Locomotive scroll instance */
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      // destroy before we mount new page
      locomotiveScroll.destroy();
    }
  }, [])

  return (
    <>
      <div className='aboutme-container'>
        <section>
          <h2 className='font-title'>Designing with purpose</h2>
          <p>Miguel is a UI/UX Designer and Front-End Developer focused on improving user experiences through intuitive, simple, and
            impactful design while helping businesses/client build digital products that are scalable, maintainable, and built to grow.</p>
        </section>
        <section className='what-i-do'>
          <h2 className='font-title'>What I do?</h2>
          <div>
            <Boxes title="UI & UX Design">
              <p>Simplifying complex problems through clear and intuitive UI Design.</p>
            </Boxes>
            <Boxes title="Web Development">
              <p>Building scalable components, maintainable code, and responsive web designs.</p>
            </Boxes>
            <Boxes title="AI-Powered workflow">
              <p>Using AI as a tool to accelarates design and development process.</p>
            </Boxes>

          </div>
        </section>
        <section className='work-history'>
          <div>
            <h2 className='font-title'>Work History</h2>
            <wa-button appearance="plain" size="small" pill>
              <wa-icon slot="start" name="download"></wa-icon>
              Download Resume</wa-button>
          </div>
          <ul>
            <li>
              <div>
                <span className='year'>Nov 2022 - Present</span>
                <span className='company'>HCL Technologies</span>
              </div>
              <span className='position'>Senior UI/UX Developer</span>
            </li>
            <li>
              <div>
                <span className='year'>Mar 2022 - Nov 2022</span>
                <span className='company'>Freelancer Work</span>
              </div>
              <span className='position'>UI/UX Developer</span>
            </li>
            <li>
              <div>
                <span className='year'>Aug 2021 - Nov 2021</span>
                <span className='company'>Accenture</span>
              </div>
              <span className='position'>Business and Technology Delivery Specialist</span>
            </li>
            <li>
              <div>
                <span className='year'>Oct 2019 - Sep 2020</span>
                <span className='company'>Alphasquare</span>
              </div>
              <span className='position'>Senior Avaloq Consultant</span>
            </li>
            <li>
              <div>
                <span className='year'>Aug 2016 - Oct 2019</span>
                <span className='company'>Avaloq Philippines ROHQ</span>
              </div>
              <span className='position'>Associate Software Engineer</span>
            </li>
          </ul>
        </section>
        <section className='skills'>

          <h2 className='font-title'>Skills</h2>
          <div>
            <ul className='skill-webdev'>
              <li className='list-title'>Web Development</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Web Awesome</li>
              <li>Web Components</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>TailwindCSS</li>
            </ul>
            <ul className='skill-design'>
              <li className='list-title'>Design</li>
              <li>Design Thinking</li>
              <li>UI UX Design</li>
              <li>Design System</li>
              <li>Wireframes</li>
              <li>Prototyping</li>
              <li>Figma</li>
              <li>UX Testing</li>
              <li>UX Research</li>
              <li>AI-Assisted Design workflow</li>
            </ul>

            <ul className='other-techstack'>
              <li className='list-title'>Other Tech Stack</li>
              <li>Avaloq Script</li>
              <li>CCM Software (Advice and Statements)</li>
              <li>PL/SQL</li>
              <li>Agile Methodology</li>
              <li>Workflow Definition (Avaloq)</li>
              <li>Interfaces (Avaloq)</li>
              <li>Reports (Avaloq)</li>
            </ul>
          </div>

        </section>

        <section className='contact'>
          <div>
            <div>
              <wa-divider></wa-divider>
              <h2>Let's connect!</h2>
            </div>
            <span className='email'>
              MPGCAPILI
              <br />
              @GMAIL.COM
            </span>
          </div>
          <div className='contact-btn'>
            <wa-button size="small" pill>LinkedIn</wa-button>
            <wa-button size="small" pill>Email me at mpgcapili@gmail.com</wa-button>
          </div>
        </section>
      </div>


      <Footer></Footer>
    </>
  )
}

export default AboutMe