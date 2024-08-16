const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-logo">
          <a href="index.html">
            <img src="images/logo-opt.png" alt="Logo" />
          </a>
        </div>
        <div className="site-tagline">Paving &amp; Landscaping Services</div>
        <a href="#" className="btn btn-defau lt btn-sm" id="contact-info">
          <i className="fa fa-bars"></i>
        </a>
        <div className="site-header-right">
          <ul className="header-info-cols">
            <li>
              <span className="icon-col">
                <i className="fa fa-map-marker"></i>
              </span>
              <div>
                <div>
                  <span>
                    Dublin, Ireland
                    <br />
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span className="icon-col">
                <i className="fa fa-phone"></i>
              </span>
              <div>
                <div>
                  <span>
                    <strong>Call us</strong>
                    <br />
                    087 163 4915
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span className="icon-col">
                <i className="fa fa-clock-o"></i>
              </span>
              <div>
                <div>
                  <span>
                    <strong>Working Hours</strong>
                    <br />
                    Mon - Sat 06:00 to 18:00
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
