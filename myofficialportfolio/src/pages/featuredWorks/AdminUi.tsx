import React from 'react'
import './adminui.css';
import { Link } from 'react-router-dom';
import '../../components/page-section.tsx';

const AdminUi = () => {
  return (
    <>
      <div className='adminui-container'>
        <Link to="/works">
          <wa-button pill appearance="plain" size="small">
            <wa-icon slot="start" name="angle-left"></wa-icon>
            Back
          </wa-button></Link>
        <section className='hero'>
          asdf

        </section>
        <section className='adminui-body'>
          <section>
            Tree
          </section>
          <section>
            <page-section>
              <div slot='context'>Project</div>
              <div slot='title'>AdminUI</div>
              <div slot='subtitle'>Web interface that allows access and manipulate Domino database using standard HTTP request</div>
            </page-section>

            <page-section>
              <div slot='context'>Role</div>
              <div slot='title'>UI/UX Designer</div>
              <div slot='subtitle'>Led the end-to-end UI/UX redesign of the AdminUI to enhance User Experience,
                focusing on streamlining complex workflows and improving overall visual clarity.
              </div>
            </page-section>
          </section>

        </section>
      </div>
    </>
  )
}

export default AdminUi