import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />

      <main class="main" data-scroll-container="">
        <section class="hero" data-scroll-section="">
          <div class="logo-wrap">
            <div class="fire"></div>
            <hr class="hero-line" data-scroll="" data-scroll-class="is-scaled"/>
            <div class="logo-mark" data-scroll="" data-scroll-class="appear">
              <svg viewbox="0 0 160 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V49.3641L64.0378 98.7283V49.3641L0 0Z" fill="#FFFDFB"></path>
                <path d="M64.0372 0V49.3641L128.075 98.7283V49.3641L64.0372 0Z" fill="#FFFDFB"></path>
                <path d="M128.076 0V31.0007L159.866 55.6827L159.94 24.6821L128.076 0Z" fill="#FFFDFB"></path>
              </svg>
              <h1 class="logo-type" data-scroll="" data-scroll-class="appear">wiridis</h1>
            </div>
            <hr class="hero-line" data-scroll="" data-scroll-class="is-scaled"/>
          </div>
        </section>
      </main>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-line {
          border: 0;
          position: relative;
          height: 40vh;
          width: 2px;
          margin: 0 auto;
          background: rgba(255, 253, 251, 0.4);
        }

        .logo-wrap {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .fire {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70vw;
          height: 70vw;
          min-width: 720px;
          min-height: 720px;
          border-radius: 50%;
          background-color: #7A3542;
          filter: blur(50px);
          transform: translate(-50%, -75%);
        }

        .fire::after {
          content: "";
          position: absolute;
          background: linear-gradient(rgba(233, 112, 65, 0), #FED29D 90%);
          bottom: 0;
          left: 0;
          height: 90%;
          width: 90%;
          transform: translateX(5%);
          border-radius: 50%;
        }

        .logo-type {
          position: relative;
          font-size: 2rem;
          letter-spacing: 0.4rem;
        }

        .logo-mark {
          position: relative;
        }
        .logo-mark svg {
          display: block;
          width: 100px;
          margin: 0 auto;
        }

        .logo-type,
        .subtitle {
          font-family: "Monda", sans-serif;
          text-transform: uppercase;
          line-height: 1.1;
        }

        .subtitle {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.2rem;
        }

        .large-text {
          font-family: "Inter", sans-serif;
          font-weight: 200;
          line-height: 1.1;
          opacity: 0.8;
        }
      `}</style>
    </Layout>
  );
}
