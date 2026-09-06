
import {
  useEffect,
  useRef,
  useState
} from 'react'

import './Home.css'

import { jobs } from '../data/jobs'

import SearchBar from '../components/SearchBar'
import JobCard from '../components/JobCard'

import video from '../assets/videos/video.mp4'


function Home() {

  const [search, setSearch] = useState('')

  const [showContent, setShowContent] =
    useState(false)

  const [scrollProgress, setScrollProgress] =
    useState(0)

  const [currentJob, setCurrentJob] =
    useState(0)


  const videoRef =
    useRef<HTMLVideoElement>(null)

  const sectionRef =
    useRef<HTMLElement>(null)


  /* =========================================
     CARROSSEL DE VAGAS
  ========================================= */

  useEffect(() => {

    if (jobs.length === 0) {
      return
    }

    const interval =
      setInterval(() => {

        setCurrentJob((current) => {

          if (current >= jobs.length - 1) {
            return 0
          }

          return current + 1

        })

      }, 5000)


    return () => {
      clearInterval(interval)
    }

  }, [])


  /* =========================================
     CONTROLE DO VÍDEO PELO SCROLL
  ========================================= */

  useEffect(() => {

    let animationId = 0

    let targetTime = 0

    let smoothTime = 0

    let lastProgress = -1


    const updateVideo = () => {

      const videoElement =
        videoRef.current

      const section =
        sectionRef.current


      if (
        videoElement &&
        section &&
        videoElement.duration > 0
      ) {

        const rect =
          section.getBoundingClientRect()


        const sectionHeight =
          section.offsetHeight -
          window.innerHeight


        const progress =
          sectionHeight > 0
            ? Math.min(
                Math.max(
                  -rect.top / sectionHeight,
                  0
                ),
                1
              )
            : 0


        if (
          Math.abs(
            progress - lastProgress
          ) > 0.001
        ) {

          lastProgress = progress

          setScrollProgress(progress)

        }


        targetTime =
          progress *
          Math.max(
            videoElement.duration - 0.001,
            0
          )


        smoothTime +=
          (targetTime - smoothTime) * 0.12


        if (
          Math.abs(
            videoElement.currentTime -
            smoothTime
          ) > 0.01
        ) {

          videoElement.currentTime =
            smoothTime

        }


        if (progress >= 0.82) {

          setShowContent(true)

        } else {

          setShowContent(false)

        }

      }


      animationId =
        requestAnimationFrame(updateVideo)

    }


    const handleLoadedMetadata = () => {

      const videoElement =
        videoRef.current


      if (!videoElement) {
        return
      }


      videoElement.pause()


      smoothTime = 0

      targetTime = 0


      videoElement.currentTime = 0.001


      animationId =
        requestAnimationFrame(updateVideo)

    }


    const videoElement =
      videoRef.current


    if (videoElement) {

      if (videoElement.readyState >= 1) {

        handleLoadedMetadata()

      } else {

        videoElement.addEventListener(
          'loadedmetadata',
          handleLoadedMetadata,
          { once: true }
        )

      }

    }


    return () => {

      cancelAnimationFrame(
        animationId
      )

    }

  }, [])


  /* =========================================
     FILTRO DAS VAGAS
  ========================================= */

  const filteredJobs =
    jobs.filter((job) => {

      const query =
        search
          .trim()
          .toLowerCase()


      if (!query) {
        return true
      }


      return [
        job.title,
        job.company,
        job.location,
        job.type
      ].some((value) =>
        value
          .toLowerCase()
          .includes(query)
      )

    })


  /* =========================================
     NAVEGAÇÃO
  ========================================= */

  const goToHero = () => {

    document
      .querySelector('.hero')
      ?.scrollIntoView({
        behavior: 'smooth'
      })

  }


  const goToJobs = () => {

    document
      .querySelector('.featured')
      ?.scrollIntoView({
        behavior: 'smooth'
      })

  }


  /* =========================================
     VAGA ATUAL DO CARROSSEL
  ========================================= */

  const currentJobData =
    jobs.length > 0
      ? jobs[currentJob]
      : null


  return (

    <main>


      {/* =====================================
          VÍDEO DE INTRODUÇÃO
      ===================================== */}

      <section
        className="video-scroll"
        ref={sectionRef}
      >

        <div className="video-sticky">

          <video
            ref={videoRef}
            className="intro-video"
            src={video}
            muted
            playsInline
            preload="auto"
          />


          <div className="game-hud">

            <div className="game-status">

              <span>
                CARREGANDO INTRODUÇÃO
              </span>

              <strong>
                {Math.round(
                  scrollProgress * 100
                )}
                %
              </strong>

            </div>


            <div className="game-progress">

              <div
                className="game-progress-fill"
                style={{
                  width:
                    `${scrollProgress * 100}%`
                }}
              />

            </div>

          </div>


          <div
            className={
              `video-overlay ${
                showContent
                  ? 'show-content'
                  : ''
              }`
            }
          >

            <span className="video-label">
              BEM-VINDO AO
            </span>


            <h1>
              Job<span>Connect</span>
            </h1>


            <p>
              Onde profissionais encontram
              oportunidades que combinam
              com o seu futuro.
            </p>


            <div className="video-buttons">

              <button
                onClick={goToHero}
              >
                Começar agora
              </button>


              <button
                className="secondary-button"
                onClick={goToJobs}
              >
                Explorar vagas
              </button>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================
          HERO
      ===================================== */}

      <section className="hero">


        {/* =================================
            TEXTO
        ================================= */}

        <div className="hero-content">


          <span className="hero-badge">

            <span className="hero-badge-dot"></span>

            Conectando talentos e oportunidades 🚀

          </span>


          <h1>

            Encontre seu próximo

            <span>
              grande desafio.
            </span>

          </h1>


          <p>

            Descubra oportunidades que combinam
            com suas habilidades, conecte-se com
            empresas e avance na sua carreira.

          </p>


          <SearchBar />


          <div className="hero-stats">


            <div>

              <strong>
                10.000+
              </strong>

              <span>
                Vagas disponíveis
              </span>

            </div>


            <div>

              <strong>
                500+
              </strong>

              <span>
                Empresas
              </span>

            </div>


            <div>

              <strong>
                25.000+
              </strong>

              <span>
                Profissionais
              </span>

            </div>


          </div>


        </div>



        {/* =================================
            CARROSSEL DE VAGAS
        ================================= */}

        {currentJobData && (

          <div className="hero-jobs-preview">


            {/* CABEÇALHO */}

            <div className="hero-preview-header">


              <div>

                <span className="hero-preview-label">
                  OPORTUNIDADES
                </span>


                <h2>
                  Vagas para você
                </h2>

              </div>


              <span className="hero-preview-live">

                <span></span>

                AO VIVO

              </span>


            </div>



            {/* VAGA */}

            <div
              className="hero-preview-job"
              key={currentJobData.id}
            >


              {/* EMPRESA */}

              <div className="hero-preview-company">


                <div className="hero-company-logo">

                  {currentJobData.company.charAt(0)}

                </div>


                <div>

                  <span>
                    EMPRESA
                  </span>


                  <strong>
                    {currentJobData.company}
                  </strong>

                </div>


              </div>



              {/* STATUS */}

              <span className="hero-job-status">

                ● NOVA OPORTUNIDADE

              </span>



              {/* TÍTULO */}

              <h3>
                {currentJobData.title}
              </h3>



              {/* LOCAL */}

              <div className="hero-job-location">

                📍 {currentJobData.location}

              </div>



              {/* RODAPÉ */}

              <div className="hero-job-footer">


                <span>
                  ⚡ {currentJobData.type}
                </span>


                <button>
                  Ver vaga →
                </button>


              </div>


            </div>



            {/* =================================
                CONTROLES DO CARROSSEL
            ================================= */}

            <div className="hero-carousel-footer">


              <div className="hero-preview-dots">

                {jobs.map(
                  (job, index) => (

                    <span
                      key={job.id}
                      className={
                        index === currentJob
                          ? 'active'
                          : ''
                      }
                    />

                  )
                )}

              </div>


              <span className="hero-preview-counter">

                {currentJob + 1}
                {' '}
                /
                {' '}
                {jobs.length}

              </span>


            </div>



            {/* =================================
                BARRA DE CARREGAMENTO
            ================================= */}

            <div className="hero-carousel-progress">

              <div
                key={currentJob}
                className="hero-carousel-progress-bar"
              />

            </div>


          </div>

        )}

      </section>



      {/* =====================================
          VAGAS EM DESTAQUE
      ===================================== */}

      <section className="featured">


        <div className="section-header">


          <div>


            <span className="section-badge">
              OPORTUNIDADES
            </span>


            <h2>
              Vagas em destaque
            </h2>


            <p>
              Explore algumas oportunidades
              disponíveis na plataforma.
            </p>


          </div>


          <button
            className="view-all"
            onClick={() => setSearch('')}
          >
            Ver todas as vagas →
          </button>


        </div>



        <div className="jobs-container">


          {filteredJobs.map(
            (job) => (

              <JobCard
                key={job.id}
                job={job}
              />

            )
          )}


        </div>


      </section>


    </main>

  )

}


export default Home

