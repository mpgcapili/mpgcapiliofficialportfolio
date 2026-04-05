import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';
import '../../components/carousel-img.tsx';
/* Import locomotive-scroll */
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

import designimportHero from "../../../public/designimport.png";

import ux2after from '../../assets/designimport/ux2after.jpg';
import ux3after from '../../assets/designimport/ux3after.jpg';
import ux4after from '../../assets/designimport/ux4after.jpg';

import ux1step1old from '../../assets/designimport/originalsteps/ux1step1old.jpg';
import ux1step2old from '../../assets/designimport/originalsteps/ux1step2old.jpg';
import ux1step3old from '../../assets/designimport/originalsteps/ux1step3old.jpg';
import ux1step4old from '../../assets/designimport/originalsteps/ux1step4old.jpg';
import ux1step5old from '../../assets/designimport/originalsteps/ux1step5old.jpg';
import ux1step6old from '../../assets/designimport/originalsteps/ux1step6old.jpg';
import ux1step7old from '../../assets/designimport/originalsteps/ux1step7old.jpg';
import ux1step8old from '../../assets/designimport/originalsteps/ux1step8old.jpg';
import ux1step9old from '../../assets/designimport/originalsteps/ux1step9old.jpg';
import ux1step10old from '../../assets/designimport/originalsteps/ux1step10old.jpg';
import ux1step11old from '../../assets/designimport/originalsteps/ux1step11old.jpg';

import ux1step1new from '../../assets/designimport/figmasteps/ux1step1new.jpg';
import ux1step2new from '../../assets/designimport/figmasteps/ux1step2new.jpg';
import ux1step3new from '../../assets/designimport/figmasteps/ux1step3new.jpg';
import ux1step4new from '../../assets/designimport/figmasteps/ux1step4new.jpg';
import ux1step5new from '../../assets/designimport/figmasteps/ux1step5new.jpg';
import ux1step6new from '../../assets/designimport/figmasteps/ux1step6new.jpg';
import ux1step7new from '../../assets/designimport/figmasteps/ux1step7new.jpg';
import ux1step8new from '../../assets/designimport/figmasteps/ux1step8new.jpg';
import ux1step9new from '../../assets/designimport/figmasteps/ux1step9new.jpg';
import ux1step10new from '../../assets/designimport/figmasteps/ux1step10new.jpg';
import ux1step11new from '../../assets/designimport/figmasteps/ux1step11new.jpg';


const DesignImport = () => {
  const oldsteps = [
    ux1step1old,
    ux1step2old,
    ux1step3old,
    ux1step4old,
    ux1step5old,
    ux1step6old,
    ux1step7old,
    ux1step8old,
    ux1step9old,
    ux1step10old,
    ux1step11old];
  const newsteps = [
    ux1step1new,
    ux1step2new,
    ux1step3new,
    ux1step4new,
    ux1step5new,
    ux1step6new,
    ux1step7new,
    ux1step8new,
    ux1step9new,
    ux1step10new,
    ux1step11new];

  const [version, setVersion] = useState("original");
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
      <div className='page-container designimport'>
        <Link to="/works">
          <wa-button className="back-button" pill appearance="plain" size="small">
            <wa-icon slot="start" name="angle-left"></wa-icon>
            Back
          </wa-button></Link>
        <section className='designimport-hero hero-settings'>
          <div className='hero-text'>
            <div>
              <p>DESIGN IMPORT</p>
            </div>
          </div>
          <div className='hero-text-bg'></div>
          <img src={designimportHero} alt={`Design Import Thumbnail`} loading="lazy" />

        </section>
        <section className='page-body'>
          <page-tree>
            <li slot='list' onClick={() => goTo('#project')}>Project</li>
            <li slot='list' onClick={() => goTo('#role')}>Role</li>
            <li slot='list' onClick={() => goTo('#ux1')}>UX #1: Eliminated Redundant Steps</li>
            <li slot='list' onClick={() => goTo('#ux2')}>UX #2: Improved Progress Visibility</li>
            <li slot='list' onClick={() => goTo('#ux3')}>UX #3: Improving Information Hierarchy</li>
            <li slot='list' onClick={() => goTo('#ux4')}>UX #4: Enhanced Result Summary UI</li>
          </page-tree>
          <section>
            <page-section id="project">
              <span slot='context'>Project</span>
              <span slot='title'>Design Import</span>
              <span slot='subtitle'>A smart migration utility that simplifies
                and accelerates the conversion
                of legacy Domino's projects to VoltMX Go.
              </span>
            </page-section>

            <page-section id="role">
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Designer</span>
              <span slot='subtitle'>Led the UI/UX design to streamline the migration workflow,
                delivering a more intuitive and frictionless user experience.
              </span>
            </page-section>

            <page-section id="ux1">
              <span slot='context'>UX #1</span>
              <span slot='title'>Eliminated Redundant Steps</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Users must go through 11 steps just to complete a singe import. Below is an emulation of the process.</span>
                  <span slot='body'>
                    <carousel-img imgs={oldsteps} >

                    </carousel-img>
                  </span>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The updated design enhances and
                    shortened the migration process into just 6 steps.
                  </span>

                  <div slot='body'>
                    <wa-radio-group
                      hint={version === "original" ? "An unedited, anonymized, screenshot form the actual app" : "High resolution version recreated using Figma"}
                      orientation="horizontal"
                      name="a"
                      value="original"
                      oninput={(e: any): void => (setVersion(e.target.value))}
                    >
                      <wa-radio appearance="button" value="original">Old Ver.</wa-radio>
                      <wa-radio appearance="button" value="figma">Figma Ver.</wa-radio>
                    </wa-radio-group>
                    <carousel-img imgs={version === "original" ? oldsteps : newsteps}></carousel-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux2">
              <span slot='context'>UX #2</span>
              <span slot='title'>Improved Progress Visibility</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The migration process lacked visibility to
                    the user's progress, making it difficult to
                    stay oriented during migration.
                  </span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux1step3old} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesign introduced a Stepper UI overview resulting
                    in clarity to users where they are
                    adn what comes next in the migration process.
                  </span>
                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux1step3old} alt="design import ux 1 before" />
                      <img slot="after" src={ux2after} alt="design import  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux3">
              <span slot='context'>UX #3</span>
              <span slot='title'>Improving Information Hierarchy</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The interface displayed all data at once without a clear hierarchy,
                    overwhelming users with information. To convert data, users had to
                    manualy click every individual item, resulting in high effort and show workflows.
                  </span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux1step8old} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The new design grouped related data for better organization
                    resulting to reduced cognitive overload and elimates
                    repetitive manual clicking with "De/Select All" feature.
                  </span>
                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux1step8old} alt="design import ux 1 before" />
                      <img slot="after" src={ux3after} alt="design import  ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux4">
              <span slot='context'>UX #4</span>
              <span slot='title'>Enhanced Result Summary UI</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>It does not give any thing beside these texts, and the only way to get the result log
                    is by navigating somewhere to the VoltMX Go itself.
                  </span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux1step11old} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>After the migration process, The Result UI will give the
                    full report of which ones are success and failed,
                    it will also give you the link to the result log.
                  </span>
                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux1step11old} alt="design import ux 1 before" />
                      <img slot="after" src={ux4after} alt="design import  ux 1 after" />
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

export default DesignImport