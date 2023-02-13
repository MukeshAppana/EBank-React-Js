import './index.css'

const NotFound = () => (
  <div className="nf-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="nf-img"
    />
    <h1 className="nf-head">Page Not Found</h1>
    <p className="nf-para">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
