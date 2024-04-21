function BannerCard({ title, collection, image }) {
  return (
    <>
      <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
        <div className="block1 wrap-pic-w">
          <img src={image} alt="IMG-BANNER" />

          <a
            href="product.html"
            className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
          >
            <div className="block1-txt-child1 flex-col-l">
              <span className="block1-name ltext-102 trans-04 p-b-8">
                {title}
              </span>

              <span className="block1-info stext-102 trans-04">
                {collection}
              </span>
            </div>

            <div className="block1-txt-child2 p-b-4 trans-05">
              <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

function BannerList() {
  return (
    <>
      <div className="sec-banner bg0 p-t-80 p-b-50">
        <div className="container">
          <div className="row">
            <BannerCard
              title="Women"
              collection="Spring 2018"
              image="images/banner-01.jpg"
            ></BannerCard>
            <BannerCard
              title="Men"
              collection="Spring 2018"
              image="images/banner-02.jpg"
            ></BannerCard>
            <BannerCard
              title="Accessories"
              collection="New Trend"
              image="images/banner-03.jpg"
            ></BannerCard>
          </div>
        </div>
      </div>
    </>
  );
}

export { BannerList };
