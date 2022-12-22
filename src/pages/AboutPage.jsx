import Card from '../component/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About the Project</h1>
        <p>This is a Paragraph</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>
          <p>Back to Home</p>
        </Link>
      </div>
    </Card>
  )
}
export default AboutPage
