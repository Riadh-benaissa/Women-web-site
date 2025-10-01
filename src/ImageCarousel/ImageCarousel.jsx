import React, { useState, useEffect } from 'react'
import insta1 from '../Create Next App_files/insta-1.jpg'
import insta2 from '../Create Next App_files/insta-2.jpg'
import insta3 from '../Create Next App_files/insta-3.jpg'
import insta4 from '../Create Next App_files/insta-4.jpg'
import insta6 from '../Create Next App_files/insta-6.jpg'

function ImageCarousel() {
  const images = [insta1, insta2, insta3, insta4, insta6]
  const [currentIndex, setCurrentIndex] = useState(2) // Commence au milieu

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [images.length])

  const getImageStyle = (index) => {
    const isCenter = index === currentIndex
    const distance = Math.abs(index - currentIndex)
    
    if (isCenter) {
      return {
        width: "300px",
        height: "300px",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        transition: "all 0.5s ease-in-out",
        transform: "scale(1)",
        zIndex: 3
      }
    } else {
      return {
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        transition: "all 0.5s ease-in-out",
        transform: "scale(0.8)",
        opacity: 0.7,
        zIndex: 1
      }
    }
  }

  return (
  <div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 0",
      background: "#F5F5DC",
      gap: "10px"
    }}>
      {images.map((image, index) => (
        <img 
          key={index}
          src={image} 
          alt={`Carousel ${index + 1}`}
          style={getImageStyle(index)}
        />
      ))}
    </div>
  </div>
    
  )
}

export default ImageCarousel
