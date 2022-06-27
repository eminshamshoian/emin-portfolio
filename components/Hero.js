const Hero = () => {
  return (
    <section className='home' id='home'>
      <div className='container-lg'>
        <div className='row min-vh-100 align-items-center align-content-center'>
          <div className='col-md-6 mt-5 mt-md-0'>
            <div className='home-img text-center'>
              <img src='avatar.png' className='mw-100' alt='profile img' />
            </div>
          </div>
          <div className='col-md-6 mt-5 mt-md-0 order-md-first'>
            <div className='home-text'>
              <h2 className='fs-4'>Name is Emin</h2>
              <h1 className='main-color text-uppercase fs-1 fw-bold'>
                Software Engineer
              </h1>

              <p className='mt-4 text-muted'>
                I am a full stack developer specialized in the MERN stack.
                Expertise are wide ranged, most skilled in React, Nextjs, Nodejs
                and Tailwindcss.
              </p>
              <a href='#portfolio' className='btn btn-color px-3 mt-3'>
                Check Out My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
