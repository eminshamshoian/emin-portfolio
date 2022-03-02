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
                src='p1.PNG'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                Notelly - Simple Note Taking App
              </h3>
              <p>
                Note taking application created with nextjs and bootstrap. The
                website is simple and saves the forms in localstorage.
              </p>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-underline'>
                  Demo
                </a>
                <a
                  href='#'
                  className='main-color text-decoration-underline mx-4'
                >
                  Code
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='p1.PNG'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                Notelly - Simple Note Taking App
              </h3>
              <p>
                Note taking application created with nextjs and bootstrap. The
                website is simple and saves the forms in localstorage.
              </p>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-underline'>
                  Demo
                </a>
                <a
                  href='#'
                  className='main-color text-decoration-underline mx-4'
                >
                  Code
                </a>
              </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='portfolio-item'>
              <img
                src='p1.PNG'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                Notelly - Online Note Taking App
              </h3>
              <p>
                This note taking application is created with nextjs and
                bootstrap. Notes gets saved to localstorage by a unique ID and
                can be modified/deleted.
              </p>
              <p className='mb-4'>
                <a href='#' className='main-color text-decoration-underline'>
                  Demo
                </a>
                <a
                  href='https://github.com/eminshamshoian/notelly'
                  target='_blank'
                  className='main-color text-decoration-underline mx-4'
                  rel='noreferrer'
                >
                  Code
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
