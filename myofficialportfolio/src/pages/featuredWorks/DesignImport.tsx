import React from 'react'

import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';

const DesignImport = () => {
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
              <span slot='title'>Design Import</span>
              <span slot='subtitle'>A smart migration utility that simplifies
                and accelerates the conversion
                of legacy Domino's projects to VoltMX Go.
              </span>
            </page-section>

            <page-section>
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Designer</span>
              <span slot='subtitle'>Led the UI/UX design to streamline the migration workflow,
                delivering a more intuitive and frictionless user experience.
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #1</span>
              <span slot='title'>Eliminated Redundant Steps</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Users must go through 11 steps just to complete a singe import. Below is an emulation of the process.</span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The updated design enhances and
                    shortened the migration process into just 6 steps.
                  </span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #2</span>
              <span slot='title'>Improved Progress Visibility</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The migration process lacked visibility to
                    the user's progress, making it difficult to
                    stay oriented during migration.
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesign introduced a Stepper UI overview resulting
                    in clarity to users where they are
                    adn what comes next in the migration process.
                  </span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #3</span>
              <span slot='title'>Improving Information Hierarchy</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The interface displayed all data at once without a clear hierarchy,
                    overwhelming users with information. To convert data, users had to
                    manualy click every individual item, resulting in high effort and show workflows.
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The new design grouped related data for better organization
                    resulting to reduced cognitive overload and elimates
                    repetitive manual clicking with "De/Select All" feature.
                  </span>
                </page-subsection>
              </span>
            </page-section>

            <page-section>
              <span slot='context'>UX #4</span>
              <span slot='title'>Enhanced Result Summary UI</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>It does not give any thing beside these texts, and the only way to get the result log
                    is by navigating somewhere to the VoltMX Go itself.
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>After the migration process, The Result UI will give the
                    full report of which ones are success and failed,
                    it will also give you the link to the result log.
                  </span>
                </page-subsection>
              </span>
            </page-section>
          </section>

        </section>
      </div>
    </>
  )
}

export default DesignImport