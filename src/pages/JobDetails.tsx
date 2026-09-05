import { useParams } from 'react-router-dom'
import { jobs } from '../data/jobs'

function JobDetails() {
  const { id } = useParams()

  const job = jobs.find(
    (job) => job.id === Number(id)
  )

  if (!job) {
    return <h1>Vaga não encontrada</h1>
  }

  return (
    <main>
      <h1>{job.title}</h1>

      <p>{job.company}</p>

      <p>📍 {job.location}</p>

      <p>💼 {job.type}</p>
    </main>
  )
}

export default JobDetails