import { useEffect, useState } from 'react'
import './page-content.css';
import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';
import '../../components/page-subsection.tsx';
import '../../components/compare-img.tsx';
import '../../components/page-tree.tsx';
/* Import locomotive-scroll */
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

import adminuiHero from "../../assets/adminui.png";

import ux1after from '../../assets/adminui/ux1after.jpg';
import ux1before from '../../assets/adminui/ux1before.jpg';
import ux1old from '../../assets/adminui/ux1old.jpg';

import ux2old from '../../assets/adminui/ux2old.jpg';
import ux2after from '../../assets/adminui/ux2after.jpg';
import ux2before from '../../assets/adminui/ux2before.jpg';

import ux3before from '../../assets/adminui/ux3old.jpg';
import ux3after from '../../assets/adminui/ux3new.jpg';
import ux3addfieldbefore from '../../assets/adminui/ux3addfieldold.jpg';
import ux3addfieldafter from '../../assets/adminui/ux3addfieldnew.jpg';
import ux3availfieldbefore from '../../assets/adminui/ux3availfieldold.jpg';
import ux3availfieldafter from '../../assets/adminui/ux3availfieldnew.jpg';
import ux3fieldsettingbefore from '../../assets/adminui/ux3fieldsettingold.jpg';
import ux3fieldsettingafter from '../../assets/adminui/ux3fieldsettingnew.jpg';
import ux3formulabefore from '../../assets/adminui/ux3formulaold.jpg';
import ux3formulaafter from '../../assets/adminui/ux3formulanew.jpg';

import ux4old from '../../assets/adminui/ux4old.jpg';
import ux4mode from '../../assets/adminui/ux4mode.jpg';
import ux4formula from '../../assets/adminui/ux4formula.jpg';
import ux4fieldsetting from '../../assets/adminui/ux4fieldsetting.jpg';
import ux4availfield from '../../assets/adminui/ux4availfield.jpg';
import ux4addfield from '../../assets/adminui/ux4addfield.jpg';
import ux4default from '../../assets/adminui/ux4.jpg';

const AdminUi = () => {

  const locomotiveScroll = new LocomotiveScroll();
  const [ux3, setux3] = useState("ux3");
  const [ux4, setux4] = useState("ux4");

  const ux3_images = {
    "ux3": {
      name: "Default",
      before: ux3before,
      after: ux3after,
    },
    "ux3addfield": {
      name: "Add New Fields",
      before: ux3addfieldbefore,
      after: ux3addfieldafter,
    },
    "ux3availfield": {
      name: "Available Fields",
      before: ux3availfieldbefore,
      after: ux3availfieldafter,
    },
    "ux3fieldsetting": {
      name: "Fields Settings",
      before: ux3fieldsettingbefore,
      after: ux3fieldsettingafter,
    },
    "ux3formula": {
      name: "Mode Formula Settings",
      before: ux3formulabefore,
      after: ux3formulaafter,
    }
  };

  const ux4_images = {
    "ux4": {
      name: "Default",
      img: ux4default
    },
    "ux4modebtn": {
      name: "Mode Buttons",
      img: ux4mode
    },
    "ux4formula": {
      name: "Mode Formula Settings",
      img: ux4formula
    },
    "ux4fieldsetting": {
      name: "Field Settings",
      img: ux4fieldsetting
    },
    "ux4availfield": {
      name: "Available Fields",
      img: ux4availfield
    },
    "ux4addfield": {
      name: "Add New Fields",
      img: ux4addfield
    },
  }

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

  const _handleSelectUx3 = (e: CustomEvent) => {
    console.log(e.detail.item.value)
    // console.log(e.detail.item.value)
    setux3(e.detail.item.value);
  }
  const _handleSelectUx4 = (e: CustomEvent) => {
    console.log(e.detail.item.value)
    // console.log(e.detail.item.value)
    setux4(e.detail.item.value);
  }



  return (
    <>
      <div data-scroll className='page-container adminui'>
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
          <div className='hero-text-bg'></div>
          <img src={adminuiHero} alt={`ADMIN UI Thumbnail`} loading="lazy" />
        </section>

        <section className='page-body'>
          <page-tree>
            <li slot='list' onClick={() => goTo('#project')}>Project</li>
            <li slot='list' onClick={() => goTo('#role')}>Role</li>
            <li slot='list' onClick={() => goTo('#ux1')}>UX #1: Improved Card Design</li>
            <li slot='list' onClick={() => goTo('#ux2')}>UX #2: Simplification of Card Activation</li>
            <li slot='list' onClick={() => goTo('#ux3')}>UX #3: Maximized the use of Spaces</li>
            <li slot='list' onClick={() => goTo('#ux4')}>UX #4: Introduced Responsiveness</li>
          </page-tree>
          <section>
            <page-section id="project">
              <span slot='context'>Project</span>
              <span slot='title'>AdminUI</span>
              <span slot='subtitle'>Web interface that allows access and manipulate Domino database using standard HTTP request.</span>
            </page-section>

            <page-section id="role">
              <span slot='context'>Role</span>
              <span slot='title'>UI/UX Designer</span>
              <span slot='subtitle'>Led the end-to-end UI/UX redesign of the AdminUI to enhance User Experience,
                focusing on streamlining complex workflows and improving overall visual clarity.
              </span>
            </page-section>

            <page-section id="ux1">
              <span slot='context'>UX #1</span>
              <span slot='title'>Improved Card Design</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Inconsistent padding introduces horizontal scrolling, disrupting description layout and making it more
                    difficult for users to efficiently scan the cards.</span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux1old} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The updated design enhances visual clarity, making it easier for users to quickly scan and process card information.</span>
                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux1before} alt="ux 1 before" />
                      <img slot="after" src={ux1after} alt="ux 1 after" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux2">
              <span slot='context'>UX #2</span>
              <span slot='title'>Simplifciation of Card Activation</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>The old design required users to drag inactive cards to an activation zone,
                    creating unnecessary interaction and inefficient use of screen space.</span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux2old} alt="ux 2 old design" />

                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesign replaces the drag interaction with a streamlined one-click activation process.</span>
                  <div slot='body'>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux2before} alt="ux 2 before design" />
                      <img slot="after" src={ux2after} alt="ux 2 after design" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux3">
              <span slot='context' >UX #3</span>
              <span slot='title'>Maximized the Use of Spaces</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>For context, this is the detailed settings view of a card.
                    The layout contains significant unused space,
                    while key components feel compressed, making the interface
                    appear crowded and visually overwhelming.
                  </span>
                  <div slot='body'>
                    <compare-img >
                      <img slot="img" src={ux3before} alt="old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesign optimizes space usage, reduces visual noise,
                    and presents the content in a more structured layout.</span>

                  <div slot='body'>

                    <wa-dropdown onwa-select={(e) => _handleSelectUx3(e)}>
                      <wa-button className="ux-3-sections" size="small" appearance="filled" slot="trigger" with-caret>{ux3_images[ux3 as keyof typeof ux3_images].name}</wa-button>
                      <wa-dropdown-item value="ux3">Default</wa-dropdown-item>
                      <wa-dropdown-item value="ux3addfield">Add New Fields</wa-dropdown-item>
                      <wa-dropdown-item value="ux3availfield">Available Fields</wa-dropdown-item>
                      <wa-dropdown-item value="ux3fieldsetting">Field Settings</wa-dropdown-item>
                      <wa-dropdown-item value="ux3formula">Mode Formula Settings</wa-dropdown-item>
                    </wa-dropdown>
                    <compare-img label1="Before" label2="After" comparable>
                      <img slot="before" src={ux3_images[ux3 as keyof typeof ux3_images].before} alt="ux 3 before design" />
                      <img slot="after" src={ux3_images[ux3 as keyof typeof ux3_images].after} alt="ux 3 after design" />
                    </compare-img>
                  </div>
                </page-subsection>
              </span>
            </page-section>

            <page-section id="ux4">
              <span slot='context'>UX #4</span>
              <span slot='title'>Introduced Responsiveness</span>
              <span slot='body'>
                <page-subsection>
                  <span slot='title'>Old Design:</span>
                  <span slot='subtitle'>Below is the first iteration of the redesigned layout. At this stage,
                    Responsiveness had not yet been addressed, affecting usability
                    and layout clarity
                  </span>
                  <div slot='body'>
                    <compare-img>
                      <img slot="img" src={ux4old} alt="ux 4 old design" />
                    </compare-img>
                  </div>
                </page-subsection>

                <page-subsection>
                  <span slot='title'>Old vs New Design:</span>
                  <span slot='subtitle'>The redesigned layout scales effectively to smaller screen sizes,
                    ensuring intuitive navigation, clear data readability, and easy access to key features.</span>
                  <div slot='body'>

                    <wa-dropdown onwa-select={(e) => _handleSelectUx4(e)}>
                      <wa-button className="ux-3-sections" size="small" appearance="filled" slot="trigger" with-caret>{ux4_images[ux4 as keyof typeof ux4_images].name}</wa-button>
                      <wa-dropdown-item value="ux4">Mode Buttons</wa-dropdown-item>
                      <wa-dropdown-item value="ux4modebtn">Mode Buttons</wa-dropdown-item>
                      <wa-dropdown-item value="ux4addfield">Add New Fields</wa-dropdown-item>
                      <wa-dropdown-item value="ux4availfield">Available Fields</wa-dropdown-item>
                      <wa-dropdown-item value="ux4fieldsetting">Field Settings</wa-dropdown-item>
                      <wa-dropdown-item value="ux4formula">Mode Formula Settings</wa-dropdown-item>
                    </wa-dropdown>
                    <compare-img >
                      <img slot="img" src={ux4_images[ux4 as keyof typeof ux4_images].img} alt={`${ux4_images[ux4 as keyof typeof ux4_images].name}`} />
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

export default AdminUi