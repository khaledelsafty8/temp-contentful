import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            vitae illum nostrum alias, quisquam omnis architecto fugit
            perspiciatis doloremque reprehenderit? Quod illum fuga assumenda,
            laboriosam illo, ipsa cumque omnis dolorem perferendis dignissimos
            rem deserunt, ipsam tempora sapiente placeat totam magni.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
