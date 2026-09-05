import './JobCard.css'
import { Link } from 'react-router-dom'
import robotImage from '../assets/img/robot.gif'
import type { Job } from '../types/Job'

interface JobCardProps {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  return (
    <article className="job-card">

      <div className="job-card-top">
        <div className="job-icon">
          💼
        </div>

        <span className="job-status">
          Nova vaga
        </span>
      </div>

      <div className="job-content">
        <h2>{job.title}</h2>

        <p className="company">
          {job.company}
        </p>

        <div className="job-info">
          <span className="location">
            <span className="info-icon">
              📍
            </span>

            {job.location}
          </span>

          <span className="type">
            <span className="info-icon">
              ⚡
            </span>

            {job.type}
          </span>
        </div>
      </div>

      {/* ROBÔ GIF */}
      <div className="job-robot">
        <img
          src={robotImage}
          alt="Robô acenando"
          className="robot"
        />

        <div className="robot-message">
          <span>Olá! 👋</span>
          Essa vaga pode ser sua!
        </div>
      </div>

      <div className="job-card-footer">
        <Link
          to={`/vaga/${job.id}`}
          className="job-card-button"
        >
          Ver vaga
        </Link>
      </div>

    </article>
  )
}

export default JobCard