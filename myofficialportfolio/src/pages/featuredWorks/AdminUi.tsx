import React from 'react'
import './page-content.css';
import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';
import '../../components/compare-img.tsx';
import '../../components/page-tree.tsx';

const AdminUi = () => {
  return (
    <>
      <div className='page-container adminui'>
        <Link to="/works">
          <wa-button className="back-button" pill appearance="plain" size="small">
            <wa-icon slot="start" name="angle-left"></wa-icon>
            Back
          </wa-button></Link>
        <section className='adminui-hero hero-settings'>
          <div className='hero-text'>
            <div>
              <p>ADMIN UI</p>
            </div>
          </div>
        </section>
        <section className='page-body'>
          <page-tree></page-tree>
          <section>
            <page-section>
              <span slot='context'>Project</span>
              <span slot='title'>AdminUI</span>
              <span slot='subtitle'>Web interface that allows access and manipulate Domino database using standard HTTP request.</span>
            </page-section>

            <page-section>
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Designer</span>
              <span slot='subtitle'>Led the end-to-end UI/UX redesign of the AdminUI to enhance User Experience,
                focusing on streamlining complex workflows and improving overall visual clarity.
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #1</span>
              <span slot='title'>Improved Card Design</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Inconsistent padding introduces horizontal scrolling, disrupting description layout and making it more
                    difficult for users to efficiently scan the cards.</span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The updated design enhances visual clarity, making it easier for users to quickly scan and process card information.</span>
                  <div slot='body'>
                    <compare-img></compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #2</span>
              <span slot='title'>Simplifciation of Card Activation</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The old design required users to drag inactive cards to an activation zone,
                    creating unnecessary interaction and inefficient use of screen space.</span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesign replaces the drag interaction with a streamlined one-click activation process.</span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #3</span>
              <span slot='title'>Maximized the Use of Spaces</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>For context, this is the detailed settings view of a card.
                    The layout contains significant unused space,
                    while key components feel compressed, making the interface
                    appear crowded and visually overwhelming.
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesign optimizes space usage, reduces visual noise,
                    and presents the content in a more structured layout.</span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #4</span>
              <span slot='title'>Introduced Responsiveness</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Below is the first iteration of the redesigned layout. At this stage,
                    Responsiveness had not yet been addressed, affecting usability
                    and layout clarity
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesigned layout scales effectively to smaller screen sizes,
                    ensuring intuitive navigation, clear data readability, and easy access to key features.</span>
                </page-subsection>
              </span>
            </page-section>
          </section>

        </section>
      </div>
    </>
  )
}

export default AdminUi