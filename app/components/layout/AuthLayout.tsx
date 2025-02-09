import React, { useEffect, useState } from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode; backgroundImage: string }> = ({ children, backgroundImage }) => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger the fade-in effect after the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`flex flex-col md:flex-row h-screen w-screen overflow-hidden ${fadeIn ? 'fade-in' : ''} font-light`}>
      {/* Background Image Section */}
      <div
        className={`w-3/4 gap-0 top-0 h-full flex flex-col items-center justify-center bg-white shadow-md md:w-1/2  md:h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}
        style={{
          backgroundImage: `url(${backgroundImage || "https://th.bing.com/th/id/R.79c7ed2c85620e0afd0f482ee9f2b00d?rik=GcOYGE7HE2g4Ew&riu=http%3a%2f%2fwww.estraviz.com.br%2fwp-content%2fuploads%2f2012%2f08%2fdonations.jpg&ehk=bKg0gchDKHNqoKD1965b6vhrGLbeGT7uLKjFY806R78%3d&risl=&pid=ImgRaw&r=0"})`,
        }}
      ></div>

      {/* Form Section */}
      <div className="flex w-full md:w-1/2 h-full items-center justify-center ">
        <div className="w-full max-w-md p-6 md:p-8 space-y-4">
          {/* Heading */}
          <h1 className="text-2xl font-light text-gray-800 mb-4 text-center">Welcome to Our Donation Platform</h1>
          {/* Greeting Message */}
          <p className="text-sm text-gray-600 mb-6 text-center">
            Your generosity helps us make the world a better place.
          </p>
          {/* Form Content */}
          <div className="flex flex-col items-center w-full px-8">{children}</div>   
        </div>
        <div>
        <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br /> <br />
        <br /> <br /> <br />
      </div>
      </div>
    </div>
  );
};

export default AuthLayout;




























// import React, { useEffect, useState } from 'react';

// const AuthLayout: React.FC<{ children: React.ReactNode; backgroundImage: string }> = ({ children, backgroundImage }) => {
//   const [fadeIn, setFadeIn] = useState(false);

//   // Trigger the fade-in effect after the component mounts
//   useEffect(() => {
//     setFadeIn(true);
//   }, []);

//   return (
//     <div className={`flex  h-screen w-screen overflow-hidden ${fadeIn ? 'fade-in' : ''}`}>
//       <div
//         className={`w-2/3 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}
//         style={{ backgroundImage: `url(${backgroundImage || "https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg"})` }}
//       ></div>
      
//       <div className={`w-1/2 flex items-center justify-center bg-gray-50 transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}>
//         <div className="w-full items-center justify-center m-[80] transition-opacity duration-1000 ease-in-out">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;












