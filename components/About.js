const About = () => {
  return (
    <section className='about py-5' id='about'>
      <div className='container-lg py-4'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='section-title text-center'>
              <h2 className='fw-bold mb-5'>About Me</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='about-text'>
              <h3 className='fs-4 mb-3'>
                Full Stack Developer. Well Rounded Web Dev Experience.
              </h3>
              <p className='text-muted'>
                I am a developer with skills in both the frontend and the
                backend. Some of the major tech stack knowledge I have includes
                HTML, CSS, JS, React, Nextjs, Typescript, Gatsby, Nodejs and
                Mongodb as well as AWS technologies. I have graduated with a{' '}
                <strong>Bachelor of Computer Science </strong> from California
                State University, Northridge where I have learned many other
                computer science skills such as algorithms, data structures and
                languages such as Java and C++.
              </p>
              <p className='text-muted'>
                Worked on various freelance and personal projects as listed in
                the portfolio section below.
              </p>
            </div>
            <div className='row text-center text-uppercase my-3'>
              <div className='col-sm-4'>
                <div className='fact-item'>
                  <h4 className='fs-1 fw-bold'>2+</h4>
                  <p className='text-muted'>Years of Expereince</p>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='fact-item'>
                  <h4 className='fs-1 fw-bold'>12+</h4>
                  <p className='text-muted'>Technologies</p>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='fact-item'>
                  <h4 className='fs-1 fw-bold'>3+</h4>
                  <p className='text-muted'>Projects</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 d-flex align-items-center links-tab'>
                <a href='#' className='btn px-3 btn-color me-5'>
                  Download Resume
                </a>
                <div className='social-links'>
                  <a href='#' className='text-dark me-4'>
                    <i className='bi bi-github'></i>
                  </a>
                  <a href='#' className='text-dark me-4'>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-5 mt-md-0'>
            <div className='skill-item mb-4'>
              <h3 className='fs-5'>HTML</h3>
              <div className='progress'>
                <div
                  className='progress-bar cta-color'
                  role='progressbar'
                  aria-valuenow='25'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
            <div className='skill-item mb-4'>
              <h3 className='fs-5'>CSS - Bootstrap - Ant Design</h3>
              <div className='progress'>
                <div
                  className='progress-bar cta-color'
                  role='progressbar'
                  aria-valuenow='50'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
            <div className='skill-item mb-4'>
              <h3 className='fs-5'>Javascript - Typescript</h3>
              <div className='progress'>
                <div
                  className='progress-bar cta-color'
                  role='progressbar'
                  aria-valuenow='75'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
            <div className='skill-item mb-4'>
              <h3 className='fs-5'>React - NextJS - GatsbyJS</h3>
              <div className='progress'>
                <div
                  className='progress-bar cta-color'
                  role='progressbar'
                  aria-valuenow='100'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
            <div className='skill-item'>
              <h3 className='fs-5'>NodeJS - MongoDB - AWS</h3>
              <div className='progress'>
                <div
                  className='progress-bar cta-color'
                  role='progressbar'
                  aria-valuenow='100'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
