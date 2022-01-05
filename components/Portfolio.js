const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='container-lg py-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='section-title text-center'>
              <h2 className='fw-bold mb-5'>Portfolio of Work</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='p1.png'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>team section</h3>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-none'>
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='img/portfolio/2.jpg'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>app landing page</h3>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-none'>
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='img/portfolio/3.jpg'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                creative team section
              </h3>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-none'>
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='img/portfolio/4.jpg'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                toggle pricing table
              </h3>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-none'>
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='img/portfolio/5.jpg'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                bootstrap 5 image gallery
              </h3>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-none'>
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='img/portfolio/6.jpg'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                filterable image gallery
              </h3>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-none'>
                  Live Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
