import "./SliderImages.css";



export default function SliderImages( {imgs, flagIsMobile} ) {

  return ( 
    < div className="w-full h-full object-cover duration-500"
    style={{
      backgroundImage: `url(${imgs.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: flagIsMobile ? '100vw' : '950px',
      transition: 'background-image 1s ease',
    }}>
    </div>
  );
}