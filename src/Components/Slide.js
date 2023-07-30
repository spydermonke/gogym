import React from 'react'

const Slide = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide h-50" style={{objectFit:"contain !important" }}>
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner h-50" id ="carousel"style={{objectFit:"contain !important" }}>
      <div className="carousel-item active">
        <img src="https://images.squarespace-cdn.com/content/v1/5515d5e6e4b096a001468a25/b761548f-4d56-46b1-84d8-a70bcbb15f63/maxresdefault.jpg" className="d-block w-100 h-50" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://i.ytimg.com/vi/RCnqdP-VhW8/maxresdefault.jpg" className="d-block w-100 h-50" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x500/?gym" className="d-block w-100 h-50" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}

export default Slide