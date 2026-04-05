import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (

    <>
      <footer>
        <div className="footer-credit">
          <p>
            Designed & Coded by @MPGCAPILI
          </p>
          <div >
            <span>© {currentYear} All rights reserved.</span>
          </div>
        </div>
        <div className='footer-links'>
          <a href="https://www.linkedin.com/in/m-p-c/" target="_blank" rel="noopener noreferrer"> <wa-icon slot="start" name="square-linkedin" family="brands"></wa-icon> LinkedIn</a>
          <a href="mailto:miguel@mpgcapili.com"> <wa-icon slot="start" name="envelope"></wa-icon> MPGCAPILI@GMAIL.COM</a>
        </div>

      </footer>
    </>
  )
}

export default Footer