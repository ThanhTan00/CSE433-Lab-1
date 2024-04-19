import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container-menu-desktop">
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>

              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  Help & FAQs
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  My Account
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>

          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              
              <a href="#" className="logo">
                <img src="images/icons/logo-01.png" alt="IMG-LOGO"></img>
              </a>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <a href="index.html">Home</a>
                    <ul className="sub-menu">
                      <li><a href="index.html">Homepage 1</a></li>
                      <li><a href="home-02.html">Homepage 2</a></li>
                      <li><a href="home-03.html">Homepage 3</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="product.html">Shop</a>
                  </li>

                  <li className="label1" data-label1="hot">
                    <a href="shoping-cart.html">Features</a>
                  </li>

                  <li>
                    <a href="blog.html">Blog</a>
                  </li>

                  <li>
                    <a href="about.html">About</a>
                  </li>

                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>	

              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>

                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>

                <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
              </div>
            </nav>
          </div>	
        </div>

        <div className="wrap-header-mobile">
          <div className="logo-mobile">
            <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"></img></a>
          </div>

          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
              <i className="zmdi zmdi-favorite-outline"></i>
            </a>
          </div>

          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>

        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>

            <li>
              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  Help & FAQs
                </a>

                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  My Account
                </a>

                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  EN
                </a>

                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  USD
                </a>
              </div>
            </li>
          </ul>

          <ul className="main-menu-m">
            <li>
              <a href="index.html">Home</a>
              <ul className="sub-menu-m">
                <li><a href="index.html">Homepage 1</a></li>
                <li><a href="home-02.html">Homepage 2</a></li>
                <li><a href="home-03.html">Homepage 3</a></li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </li>

            <li>
              <a href="product.html">Shop</a>
            </li>

            <li>
              <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
            </li>

            <li>
              <a href="blog.html">Blog</a>
            </li>

            <li>
              <a href="about.html">About</a>
            </li>

            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE"></img>
            </button>

            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input className="plh3" type="text" name="search" placeholder="Search..."></input>
            </form>
          </div>
        </div>
      </header>

      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart"></div>

        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">
              Your Cart
            </span>

            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close"></i>
            </div>
          </div>
          
          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-01.jpg" alt="IMG"></img>
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    White Shirt Pleat
                  </a>

                  <span className="header-cart-item-info">
                    1 x $19.00
                  </span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-02.jpg" alt="IMG"></img>
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    Converse All Star
                  </a>

                  <span className="header-cart-item-info">
                    1 x $39.00
                  </span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-03.jpg" alt="IMG"></img>
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                    Nixon Porter Leather
                  </a>

                  <span className="header-cart-item-info">
                    1 x $17.00
                  </span>
                </div>
              </li>
            </ul>
            
            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>

              <div className="header-cart-buttons flex-w w-full">
                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                  View Cart
                </a>

                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section-slide">
        <div className="wrap-slick1">
          <div className="slick1">
            <div className="item-slick1" style={{backgroundImage: `url(images/slide-01.jpg)`}}>
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
                    <span className="ltext-101 cl2 respon2">
                      Women Collection 2018
                    </span>
                  </div>
                    
                  <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      NEW SEASON
                    </h2>
                  </div>
                    
                  <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
                    <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item-slick1" style={{backgroundImage: `url(images/slide-02.jpg)`}}>
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div className="layer-slick1 animated visible-false" data-appear="rollIn" data-delay="0">
                    <span className="ltext-101 cl2 respon2">
                      Men New-Season
                    </span>
                  </div>
                    
                  <div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay="800">
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      Jackets & Coats
                    </h2>
                  </div>
                    
                  <div className="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay="1600">
                    <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item-slick1" style={{backgroundImage: `url(images/slide-03.jpg)`}}>
              <div className="container h-full">
                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay="0">
                    <span className="ltext-101 cl2 respon2">
                      Men Collection 2018
                    </span>
                  </div>
                    
                  <div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay="800">
                    <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                      New arrivals
                    </h2>
                  </div>
                    
                  <div className="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay="1600">
                    <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
