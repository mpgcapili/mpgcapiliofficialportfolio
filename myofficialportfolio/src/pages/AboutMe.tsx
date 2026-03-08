import '@awesome.me/webawesome/dist/components/button/button.js';

const AboutMe = () => {
  return (
    <>
        <section>
            <h2>Designing with purpose</h2>
            <p>Miguel is a UI/UX Designer and Front-End Developer focused on improving user experiences through intuitive, simple, and 
                impactful design while helping businesses/client build digital products that are scalable, maintainable, and built to grow.</p>
        </section>
        <section className='work-history'>
            <ul>
                <li>nov 2022 - present</li>
                <li>mar 2022 - nov 2022</li>
                <li>aug 2021 - nov 2021</li>
                <li>oct 2019 - sep 2020</li>
                <li>aug 2016 - oct 2019</li>
            </ul>
        </section>
        <section className='skills'>
            <ul>
                <li>design</li>
                <li>web dev</li>
                <li>other tech stack</li>
            </ul>
        </section>

        <section>
            lets connect!
            <div>
                <wa-button>linkedin</wa-button>
                <wa-button>Email me at mpgcapili@gmail.com</wa-button>
            </div>

        </section>
    </>
  )
}

export default AboutMe