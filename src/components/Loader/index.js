import './index.scss'

const Loader = ({ isLoading }) => {
  return (
    <div className={`loader-overlay ${!isLoading ? 'fade-out' : ''}`}>
      <div className="spinner" />
    </div>
  )
}

export default Loader
