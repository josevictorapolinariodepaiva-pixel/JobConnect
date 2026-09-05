import JobCard from '../components/JobCard'
import { jobs } from '../data/jobs'

import './Vagas.css'

function Vagas() {
  return (
    <main className="vagas-page">

      <section className="vagas-header">

        <span className="vagas-badge">
          OPORTUNIDADES
        </span>

        <h1>
          Encontre a sua
          <span> próxima vaga</span>
        </h1>

        <p>
          Explore oportunidades e encontre a vaga
          ideal para a sua carreira.
        </p>

      </section>

      <section className="jobs-section">

        <div className="jobs-container">

          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Vagas