import React from 'react';


const Footer = () => {
  return (
    <>
       <div className="footer">
        <div className="footer section__padding">
          <div className="footer-links">
            <div className="footer-links_div">
                <h4>For Business</h4>
                <a href="/mobiles">
                    <p>Mobiles</p>
                </a>
                <a href="/news">
                    <p>News</p>
                </a>
                <a href="/">
                    <p>Shop</p>
                </a>
            </div>
            <div className="footer-links_div">
              <h4>Partners</h4>
                <a href="https://www.apple.com/">
                    <p>Apple</p>
                </a>
            </div>
            <div className="footer-links_div">
            <h4>Company</h4>
                <a href="/about">
                    <p>About</p>
                </a>
                <a href="/contact">
                    <p>Contact</p>
                </a>
            </div>
            <div className="footer-links_div">
               <h4>Coming soon on</h4>
               <div className="socialmedia">
                <p>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                </p>
               </div>
            </div>
          </div>

          <hr></hr>
           
           <div className="footer-below">
            <div className="footer-copyright">
                <p>
                    @{new Date().getFullYear()} MobileShop.All right reserved.
                </p>
            </div>
            <div className="footer-below-links">
                <div><p>Terms & Conditions</p></div>
                <div><p>Privacy</p></div>
                <div><p>Security</p></div>
                <a href="/cookie"><div><p>Developed by : Nataša Petakovic</p></div></a>
            </div>
           </div>

        </div>
       </div>
    </>
  )
}

export default Footer
