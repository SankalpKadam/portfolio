import React from 'react'
import './Navbar.css'
import axios from 'axios'
const Navbar = () => {
  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        `${window.location.origin}/assets/SankalpSunil-Kadam-Resume.pdf`,
        {
          responseType: "blob", 
        }
      );

      // Create a Blob from the response data
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(pdfBlob);

      // Create a temporary <a> element to trigger the download
      const tempLink = document.createElement("a");
      tempLink.href = url;
      tempLink.setAttribute(
        "download",
        `SankalpSunil-Kadam-Resume.pdf`
      ); // Set the desired filename for the downloaded file

      // Append the <a> element to the body and click it to trigger the download
      document.body.appendChild(tempLink);
      tempLink.click();

      // Clean up the temporary elements and URL
      document.body.removeChild(tempLink);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };
  return (
    <div className='navbar 
    lg:py-8 
    lg:px-32
    md:px-16 
    px-4 
    py-4 
    flex 
    flex-row 
    text-white 
    justify-between
    items-center
    backdrop-blur-sm
    bg-transparent
    z-[60]
    fixed
    top-0
    w-full
    h-[65px]
    '>
      <div className='navbar__logo
      flex
      flex-row
      items-center'>
        <img src={`${window.location.origin}`+"/logo.png"} alt="" className='h-10
        pr-3
        '/>
        <div>
          <p className='lg:text-3xl
        md:text-2xl
        text-xl 
        font-bold 
        text-white'>Sankalp</p>
          <p className='lg:text-xl
        md:text-lg
        text-md
        text-white
        -mt-2'>Kadam</p>
        </div>
      </div>
      <div className='//border-2
      //border-navbarColor
      rounded-xl
      px-4
      py-2
      lg:text-xl
      text-sm
      cursor-pointer
      '
      onClick={downloadPDF}>
        Resume
      </div>
    </div>
  )
}

export default Navbar
