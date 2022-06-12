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
                src='p6.png'
                className='w-100 img-thumbnail'
                alt='portfolio item'
              />
              <h3 className='text-capitalize fs-5 my-2'>
                Global Chronicles - Blogging Application
              </h3>
              <p>
                This blogging application is built using nextjs and sanity
                studio as a backend to serve the articles. The build uses nextjs
                server side rendering (SSR) as well as incremental static
                regeneration (ISR) to cache data from sanity studio for fast
                page loads. The website is designed using tailwindcss. The
                design is responsive to all screen sizes.
              </p>
              <p>
                <strong>Tech Used:</strong> HTML, CSS, JavaScript, Typescript,
                React, Nextjs, Tailwindcss, Sanity Studio, Vercel.
              </p>
              <p className='mb-4'>
                <a
                  href='https://medium-clone-sanity-beryl.vercel.app/'
                  className='main-color text-decoration-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Demo
                </a>
                <a
                  href='https://github.com/eminshamshoian/medium-clone-sanity'
                  className='main-color text-decoration-underline mx-4'
                  target='_blank'
                  rel='noopener noreferrer'
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
