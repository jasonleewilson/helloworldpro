import { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        title='back to top'
        className='fixed bottom-5 right-5 text-white border-0 p-2 cursor-pointer z-50'
      >
        <svg
          fill='#ffffff'
          version='1.1'
          id='icon'
          xmlns='http://www.w3.org/2000/svg'
          width='40px'
          height='40px'
          viewBox='0 0 32 32'
        >
          <title>up-to-top</title>
          <polygon points='16,14 6,24 7.4,25.4 16,16.8 24.6,25.4 26,24 ' />
          <rect x='4' y='8' width='24' height='2' />
          <rect
            id='_Transparent_Rectangle_'
            className='st0'
            width='32'
            height='32'
          />
        </svg>
      </button>
    )
  );
};

export default BackToTop;
