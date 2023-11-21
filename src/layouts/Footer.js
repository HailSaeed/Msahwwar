
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="https://www.youtube.com/@MashwarHd/featured">
                  <i aria-hidden="true" className="fab fa-youtube" style={{ color: 'red' }} />
                </a>

                <a target="_blank" rel="nofollow" href="https://alvo.chat/35yg">
                  <i aria-hidden="true" className="fab fa-whatsapp" style={{ color: 'green' }} />
                </a>

                <a target="_blank" rel="nofollow" href="https://www.instagram.com/mohamadony7/">
                  <i aria-hidden="true" className="fab fa-instagram" style={{ color: 'purple' }} />
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <strong>
                  <img width={80} height={40} src="assets/images/Logo.png" alt=""
                  /></strong>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a href="https://twitter.com/Hail_Bahafi" ><span style={{ display: 'inline-block', borderBottom: '1px solid black', paddingTop: 10 }}>تواصل مع المطور</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
