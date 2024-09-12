import React, { useState, useEffect } from 'react';
import image1 from "../assets/Images/home-bg1.jpg";
import image2 from "../assets/Images/home-bg2.jpg";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    // Image slide effect: change image every 2 seconds
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === image1 ? image2 : image1));
    }, 3000); // Change the image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {/* Background image that switches between image1 and image2 */}
      <div
        className="relative w-full h-screen bg-fixed bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover', // Scale the image to cover the entire background
          backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
          paddingTop: '80px', // Adjust this value to match your navbar height
          transition: 'background-image 1s ease-in-out', // Smooth transition between images
        }}
      >
        {/* Buttons */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 mt-[220px] ml-[50px]">
          <button
            className="bg-[#efde44] text-black px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
            onClick={() => navigate('/signup')}
          >
            Apply Now
          </button>
          <button
            className="bg-[#efde44] text-black ml-[30px] px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
            onClick={() => navigate('/signup')}
          >
            Explore More+
          </button>
        </div>
      </div>

      {/* Add keyframes for fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Home;
