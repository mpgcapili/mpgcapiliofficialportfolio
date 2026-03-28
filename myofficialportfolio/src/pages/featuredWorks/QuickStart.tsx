import React from 'react'
import './page-content.css';
import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';

const QuickStart = () => {
  return (
    <>
      <div className='page-container'>
        <Link to="/works">
          <wa-button pill appearance="plain" size="small">
            <wa-icon slot="start" name="angle-left"></wa-icon>
            Back
          </wa-button></Link>
        <section className='hero'>
          asdf

        </section>
        <section className='page-body'>
          <section>
            Tree
          </section>
          <section>
            <page-section>
              <span slot='context'>Project</span>
              <span slot='title'>QuickStart</span>
              <span slot='subtitle'>A self-service platform that allow users to deploy, manage, and monitor server instances.</span>
            </page-section>

            <page-section>
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Developer</span>
              <span slot='subtitle'>Responsible for UI/UX design improvement and as well
                implementing them using ReactJS, HTML, CSS, and Bootstrap.
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #1</span>
              <span slot='title'>Improved Card's Data Hierarchy</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The data card lacked visual hierarchy and consistent spacing.
                    Poor contrast and an unoptimized data summary made it difficult for users to scan information quickly.
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The new design has now a clear hierarchy with consistent spacing, resulting in key metrics being able to scan instantly by the user.
                  </span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #2</span>
              <span slot='title'>Optimizing White Space for Scannability</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The UI lacked negative space, causing a cluttered layout where data was difficult to distinguish and scan.</span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>I improved the negative space to reduce visual noise and established a clear hierarchy, making the information easier to scan and read.</span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #3</span>
              <span slot='title'>Implemented Dark Theme</span>
              <span slot='subtitle'>QuickStart lacked a Dark theme, I designed and coded a full Dark Theme to improved
                accessibility.
              </span>
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

export default QuickStart