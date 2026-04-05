import React, { useEffect, useState } from 'react'
import './page-content.css';
import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';
import '../../components/page-tree.tsx';

/* Import locomotive-scroll */
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

import ux1subafter from '../../assets/aiguardrails/ux1subafter.jpg';
import ux1subbefore from '../../assets/aiguardrails/ux1subbefore.jpg';
import ux1svcafter from '../../assets/aiguardrails/ux1svcafter.jpg';
import ux1svcbefore from '../../assets/aiguardrails/ux1svcbefore.jpg';
import ux1v1 from '../../assets/aiguardrails/ux1v1.jpg';
import ux1v2 from '../../assets/aiguardrails/ux1v2.jpg';
import ux1v3 from '../../assets/aiguardrails/ux1v3.jpg';
import ux1v4 from '../../assets/aiguardrails/ux1v4.jpg';
import ux1v5 from '../../assets/aiguardrails/ux1v5.jpg';
import ux2after from '../../assets/aiguardrails/ux2after.jpg';
import ux2before from '../../assets/aiguardrails/ux2before.jpg';
import ux3after from '../../assets/aiguardrails/ux3after.jpg';
import ux3before from '../../assets/aiguardrails/ux3before.jpg';
import ux3old from '../../assets/aiguardrails/ux3old.jpg';
import ux4dark from '../../assets/aiguardrails/ux4dark.jpg';
import ux4light from '../../assets/aiguardrails/ux4light.jpg';

/* Locomotive scroll instance */
const AiGuardrails = () => {

  const ux1ver = [
    ux1v1,
    ux1v2,
    ux1v3,
    ux1v4,
    ux1v5]
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

  type BoxesProps = {
    title: string,
    children: React.ReactNode,
    icon: string,
  }


  const Boxes = ({ title, children, icon }: BoxesProps): any => (
    <>
      <div className='box'>
        <wa-icon name={icon}></wa-icon>
        <div>
          <h3>{title}</h3>
          {children}
        </div>
      </div >
    </>
  )

  return (
    <>
      <div className='page-container aiguardrails'>
        <Link to="/works">
          <wa-button className="back-button" pill appearance="plain" size="small">
            <wa-icon slot="start" name="angle-left"></wa-icon>
            Back
          </wa-button></Link>
        <section className='aiguardrails-hero hero-settings'>
          <div className='hero-text'>
            <div>
              <p>AI Guardrails</p>
            </div>
          </div>
          <div className='hero-text-bg'></div>
          <img src={`../../src/assets/aiguardrails.png`} alt={`AI Guardrails Thumbnail`} loading="lazy" />
        </section>
        <section className='page-body'>
          <page-tree>
            <li slot='list' onClick={() => goTo('#project')}>Project</li>
            <li slot='list' onClick={() => goTo('#role')}>Role</li>
            <li slot='list' onClick={() => goTo('#primaryUsers')}>Primary Users</li>
            <li slot='list' onClick={() => goTo('#ux1')}>UX #1: The Main Components</li>
            <li slot='list' onClick={() => goTo('#ux2')}>UX #2: Enhancing Navigation</li>
            <li slot='list' onClick={() => goTo('#ux3')}>UX #3: Removing Drawer Component</li>
            <li slot='list' onClick={() => goTo('#ux4')}>UX #4: Implementing Dark Theme</li>
          </page-tree>
          <section>
            <page-section id="project">
              <span slot='context'>Project</span>
              <span slot='title'>Guardrails</span>
              <span slot='subtitle'>A platform for managing AI subscriptions and tokens,
                allowing owners to distribute access to teams and subscribers to join services.</span>
            </page-section>

            <page-section id="role" >
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Developer</span>
              <span slot='subtitle'>Led the UI/UX design process and implemented the frontend architecture using Lit web components.
                Utilized Web Awesome and custom CSS to build a responsive, high-performance web application.
              </span>
            </page-section>

            <page-section id="primaryUsers">
              <span slot='context' >Users</span>
              <span slot='title'>Primary Users Personas</span>
              <span slot='body'>
                {/* service owners subscribers */}
                {/* <div className='service-owners'></div>
                <div className='subscribers'></div> */}
                <section className='personas'>
                  <Boxes title="Service Owners" icon="user-tie">
                    <p>The administrators who manage AI subscriptions. They are responsible for purchasing tokens and
                      allocating them to their team.
                    </p>
                  </Boxes>
                  <Boxes title="Subscribers" icon="user">
                    <p>The end-users who consume the AI Services utilizing the tokens distributed to them.</p>
                  </Boxes>
                </section>
              </span>
            </page-section>

            <page-section >
              <span slot='context' id="ux1">UX #1</span>
              <span slot='title'>The Service and Subscription Components</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Design process</span>
                  <div slot='body'>
                    <carousel-img imgs={ux1ver}></carousel-img>
                  </div>
                </page-subsection>
                <page-subsection>
                  <span slot='title'>The Service Card</span>
                  <span slot='subtitle'>Service component enables Service Owners to create custom subscription plans for users and equips Service Owners with the tools to track user consumption in real-time.</span>
                  <div slot='body'>
                    <compare-img label1="Before Generative AI" label2="After Generative AI" comparable>
                      <img slot="before" src={ux1svcbefore} alt="ai guardrails ux 1 before" />
                      <img slot="after" src={ux1svcafter} alt="ai guardrails  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>The Subscription Card</span>
                  <span slot='subtitle'>The Subscription Card appears after a user subscribes to a service, allowing them to monitor their subscription and access it for API usage.</span>
                  <div slot='body'>
                    <compare-img label1="Before Generative AI" label2="After Generative AI" comparable>
                      <img slot="before" src={ux1subbefore} alt="ai guardrails ux 1 before" />
                      <img slot="after" src={ux1subafter} alt="ai guardrails  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux2">
              <span slot='context'>UX #2</span>
              <span slot='title'>Enhancing Navigation</span>

              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Our initial Tab Group navigation worked for two pages, but adding new sections revealed scaling issues
                    that threatened mobile usability and inefficiently used vertical space.
                  </span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux2before} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The new design has now a dedicated navigation bar providing a scalable, responsive solution that adapts
                    flawlessly to mobile devices and future content expansion</span>
                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux2before} alt="ai guardrails ux 1 before" />
                      <img slot="after" src={ux2after} alt="ai guardrails  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux3">
              <span slot='context'>UX #3</span>
              <span slot='title'>Removing Drawer Component</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>We initially relied on a drawer component for form inputs. But as the platform scaled and new fields were added,
                    the drawer's restricted width caused horizontal cramping and excessive visual noise
                  </span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux3old} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Pop-up Model vs Drawer</span>
                  <span slot='subtitle'>Because of drawer&#39;s width restriction, we decided to keep the drawer for navigation (for mobile) and filter and use Pop up modal component for all creation and editing forms.</span>
                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux3before} alt="ai guardrails ux 1 before" />
                      <img slot="after" src={ux3after} alt="ai guardrails  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux4">
              <span slot='context'>UX #4</span>
              <span slot='title'>Implementing Dark Theme</span>

              <span slot='subtitle'>We also improved accessibility by introducing dark mode.</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Full Web</span>
                  <div slot='body'>
                    <compare-img label1="Dark Theme" label2="Light Theme" comparable>
                      <img slot="before" src={ux4dark} alt="ai guardrails ux 1 before" />
                      <img slot="after" src={ux4light} alt="ai guardrails  ux 1 after" />
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

export default AiGuardrails