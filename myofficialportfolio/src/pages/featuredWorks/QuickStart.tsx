import { useEffect } from 'react'
import './page-content.css';
import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';
/* Import locomotive-scroll */
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

import ux1after from '../../assets/quickstart/ux1after.jpg';
import ux1before from '../../assets/quickstart/ux1before.jpg';
import ux2after from '../../assets/quickstart/ux2after.jpg';
import ux2before from '../../assets/quickstart/ux2before.jpg';
import ux3cardafter from '../../assets/quickstart/ux3cardafter.jpg';
import ux3cardbefore from '../../assets/quickstart/ux3cardbefore.jpg';
import ux3fullafter from '../../assets/quickstart/ux3fullafter.jpg';
import ux3fullbefore from '../../assets/quickstart/ux3fullbefore.jpg';
import ux3tableafter from '../../assets/quickstart/ux3tableafter.jpg';
import ux3tablebefore from '../../assets/quickstart/ux3tablebefore.jpg';

const QuickStart = () => {

  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    /* Locomotive scroll instance */

    return () => {
      // destroy before we mount new page
      locomotiveScroll.destroy();
    }
  }, [])

  const goTo = (id: string) => {
    locomotiveScroll.scrollTo(id, { offset: -80 });
  };

  return (
    <>
      <div className='page-container quickstart' data-scroll-container>
        <Link to="/works">
          <wa-button className="back-button" pill appearance="plain" size="small">
            <wa-icon slot="start" name="angle-left"></wa-icon>
            Back
          </wa-button></Link>
        <section className='quickstart-hero hero-settings'>
          <div className='hero-text'>
            <div>
              <p>QUICKSTART</p>
              <div className="sub-details">
                <span>2023 - 2024</span>
                <wa-icon name="circle"></wa-icon>
                <span>UI/UX Designer</span>
              </div>
              <div className="short-desc">
                <p className='desc'>A self-service platform that allows users to deploy, manage, and monitor server instances.</p>
              </div>
            </div>
          </div>
          <p className='disclaimer'><i>Official projects are protected by NDA; shared content is anonymized or summarized.</i></p>
          <div className='hero-text-bg'></div>
          <img src={'/quickstart.png'} alt={`QuickStart Thumbnail`} loading="lazy" />
        </section>
        <section className='page-body'>
          <page-tree>
            <li slot='list' onClick={() => goTo('#project')}>Project</li>
            <li slot='list' onClick={() => goTo('#role')}>Role</li>
            <li slot='list' onClick={() => goTo('#ux1')}>UX #1: Improved Card's Data Hierarcy</li>
            <li slot='list' onClick={() => goTo('#ux2')}>UX #2: Optimizing White Space for Scannability</li>
            <li slot='list' onClick={() => goTo('#ux3')}>UX #3: Implemented Dark Theme</li>
            <li slot='list' onClick={() => goTo('#ux4')}>UX #4: Introduced Responsiveness</li>
          </page-tree>
          <section>
            <page-section id="project">
              <span slot='context'>Project</span>
              <span slot='title'>QuickStart</span>
              <span slot='subtitle'>A self-service platform that provides a user-friendly interface for deploying, managing, and monitoring servers.</span>
            </page-section>

            <page-section id="role">
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Developer</span>
              <span slot='subtitle'>Responsible for UI/UX design improvement and as well
                implementing them using ReactJS, HTML, CSS, and Bootstrap.
              </span>
            </page-section>

            <page-section id="ux1">
              <span slot='context'>UX #1</span>
              <span slot='title'>Improved Card's Data Hierarchy</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The data card lacked visual hierarchy and consistent spacing.
                    Poor contrast and an unoptimized data summary made it difficult for users to scan information quickly.
                  </span>

                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux1before} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The new design has now a clear hierarchy with consistent spacing, resulting in key metrics being able to scan instantly by the user.
                  </span>
                </page-subsection>
              </span>
              <div slot='body'>
                <compare-img label1="Before" label2="After" comparable>
                  <img slot="before" src={ux1before} alt="design import ux 1 before" />
                  <img slot="after" src={ux1after} alt="design import  ux 1 after" />
                </compare-img>
              </div>
            </page-section>

            <page-section id="ux2">
              <span slot='context'>UX #2</span>
              <span slot='title'>Optimizing White Space for Scannability</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The UI lacked negative space, causing a cluttered layout where data was difficult to distinguish and scan.</span>

                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux2before} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>I improved the negative space to reduce visual noise and established a clear hierarchy, making the information easier to scan and read.</span>

                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux2before} alt="design import ux 1 before" />
                      <img slot="after" src={ux2after} alt="design import  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>

              </span>
            </page-section>

            <page-section id="ux3">
              <span slot='context'>UX #3</span>
              <span slot='title'>Implemented Dark Theme</span>
              <span slot='subtitle'>QuickStart lacked a Dark theme, I designed and coded a full Dark Theme to improved
                accessibility.
              </span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Card</span>
                  <div slot='body'>
                    <compare-img label1="Dark Theme" label2="Light Theme" comparable>
                      <img slot="before" src={ux3cardbefore} alt="design import ux 1 before" />
                      <img slot="after" src={ux3cardafter} alt="design import  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
                <page-subsection>
                  <span slot='title'>Table</span>
                  <div slot='body'>
                    <compare-img label1="Dark Theme" label2="Light Theme" comparable>
                      <img slot="before" src={ux3tablebefore} alt="design import ux 1 before" />
                      <img slot="after" src={ux3tableafter} alt="design import  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
                <page-subsection>
                  <span slot='title'>Full Web</span>
                  <div slot='body'>
                    <compare-img label1="Dark Theme" label2="Light Theme" comparable>
                      <img slot="before" src={ux3fullbefore} alt="design import ux 1 before" />
                      <img slot="after" src={ux3fullafter} alt="design import  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>


          </section>

        </section>
      </div>
    </>
  )
}

export default QuickStart