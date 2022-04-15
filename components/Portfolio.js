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
                src='p2.png'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                Shareapremy - Premium Video Sharing
              </h3>
              <p>
                This is a private video sharing application. Collections are
                accessed through links and can be purchased. The platform keeps
                a fee while distributing the rest to the creator.
              </p>
              <p>
                <strong>Tech Used:</strong> HTML, CSS, React, Nextjs, Bootstrap,
                Antd, Nodejs, Mongodb, AWS S3, AWS SES, Stripe, Digital Ocean,
                NGINX, PM2
              </p>
              <p>
                <strong>Subscriber Login:</strong> <br />
                <strong>Creator Login:</strong>
              </p>
              <p className='mb-4'>
                <a
                  href='http://161.35.228.239/'
                  className='main-color text-decoration-underline'
                  target='_blank'
                >
                  Demo
                </a>
                <a
                  href='https://github.com/eminshamshoian/shareapremy-client'
                  className='main-color text-decoration-underline mx-4'
                  target='_blank'
                >
                  Client Code
                </a>
                <a
                  href='https://github.com/eminshamshoian/shareapremy-server'
                  className='main-color text-decoration-underline'
                  target='_blank'
                >
                  Server Code
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
                website is simple and saves the forms in localstorage. The
                interface offers a clean way of storing notes.
              </p>
              <p>
                <strong>Tech Used:</strong> HTML, CSS, React
              </p>
              <br />
              <br />
              <p>
                <strong>Authentication Required: </strong> None
              </p>
              <br />
              <p className='mb-4'>
                <a
                  href='https://elated-shockley-5854ac.netlify.app/'
                  className='main-color text-decoration-underline'
                  target='_blank'
                >
                  Demo
                </a>
                <a
                  href='https://github.com/eminshamshoian/notelly'
                  className='main-color text-decoration-underline mx-4'
                  target='_blank'
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
