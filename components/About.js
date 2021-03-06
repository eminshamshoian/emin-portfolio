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
                Mongodb as well as AWS technologies. I have graduated with a{" "}
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
            <div className='row'>
              <div className='col-lg-12 d-flex align-items-center links-tab'>
                <a
                  href='https://drive.google.com/file/d/1Yj_v5f_ICfq2m2kwKFKLRAtJJtRE1w9c/view?usp=sharing'
                  className='btn px-3 btn-color me-5'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Download Resume
                </a>
                <div className='social-links'>
                  <a
                    href='https://github.com/eminshamshoian'
                    className='text-dark me-4'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='bi bi-github'></i>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/emin-shamshoian-29075b146/'
                    className='text-dark me-4'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 mt-5 mt-md-0'>
            <div className='skills-box'>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>
                  <i className='bi bi-terminal pe-3'></i>Tech Stack
                </h3>
                <hr />
              </div>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>
                  <i className='bi bi-arrow-right-short px-3 skill-icon'></i>
                  HTML
                </h3>
              </div>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>
                  <i className='bi bi-arrow-right-short px-3 skill-icon'></i>CSS
                  - Bootstrap - Tailwindcss
                </h3>
              </div>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>
                  <i className='bi bi-arrow-right-short px-3 skill-icon'></i>
                  Javascript - Typescript - Java - C/C++
                </h3>
              </div>
              <div className='skill-item mb-4'>
                <h3 className='fs-5'>
                  <i className='bi bi-arrow-right-short px-3 skill-icon'></i>
                  React - NextJS - Sanity Studio
                </h3>
              </div>
              <div className='skill-item'>
                <h3 className='fs-5'>
                  <i className='bi bi-arrow-right-short px-3 skill-icon'></i>
                  NodeJS - MongoDB - AWS - Digital Ocean
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
