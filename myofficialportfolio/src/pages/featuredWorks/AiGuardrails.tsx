import React, { useEffect, useState } from 'react'
import './page-content.css';
import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';

/* Import locomotive-scroll */
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

/* Locomotive scroll instance */
const AiGuardrails = () => {

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
          <section>
            Tree
          </section>
          <section>
            <page-section>
              <span slot='context'>Project</span>
              <span slot='title'>Guardrails</span>
              <span slot='subtitle'>A platform for managing AI subscriptions and tokens,
                allowing owners to distribute access to teams and subscribers to join services.</span>
            </page-section>

            <page-section>
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Developer</span>
              <span slot='subtitle'>Led the UI/UX design process and implemented the frontend architecture using Lit web components.
                Utilized Web Awesome and custom CSS to build a responsive, high-performance web application.
              </span>
            </page-section>

            <page-section>
              <span slot='context'>Users</span>
              <span slot='title'>Primary Users Personas</span>
              <span slot='body'>
                {/* service owners subscribers */}
                <div className='service-owners'></div>
                <div className='subscribers'></div>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #1</span>
              <span slot='title'>The Service and Subscription Components</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>The Service Card</span>
                  <span slot='subtitle'>Service component enables Service Owners to create custom subscription plans for users and equips Service Owners with the tools to track user consumption in real-time.</span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>The Subscription Card</span>
                  <span slot='subtitle'>The Subscription Card appears after a user subscribes to a service, allowing them to monitor their subscription and access it for API usage.</span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #2</span>
              <span slot='title'>Enhancing Navigation</span>

              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Our initial Tab Group navigation worked for two pages, but adding new sections revealed scaling issues
                    that threatened mobile usability and inefficiently used vertical space.
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The new design has now a dedicated navigation bar providing a scalable, responsive solution that adapts
                    flawlessly to mobile devices and future content expansion</span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #3</span>
              <span slot='title'>Removing Drawer Component</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>We initially relied on a drawer component for form inputs. But as the platform scaled and new fields were added,
                    the drawer's restricted width caused horizontal cramping and excessive visual noise
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Pop-up Model vs Drawer</span>
                  <span slot='subtitle'>Because of drawer&#39;s width restriction, we decided to keep the drawer for navigation (for mobile) and filter and use Pop up modal component for all creation and editing forms.</span>
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