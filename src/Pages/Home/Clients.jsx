import Slider from "react-slick";

const Clients = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-dark relative py-12">
      <Slider {...settings} className="container">
        <div className="p-4">
          <div className="bg-textGray w-[150px] h-full aspect-square"></div>
        </div>
        <div className="p-4">
          <div className="bg-textGray w-[150px] h-full aspect-square"></div>
        </div>
        <div className="p-4">
          <div className="bg-textGray w-[150px] h-full aspect-square"></div>
        </div>
        <div className="p-4">
          <div className="bg-textGray w-[150px] h-full aspect-square"></div>
        </div>
        <div className="p-4">
          <div className="bg-textGray w-[150px] h-full aspect-square"></div>
        </div>
        <div className="p-4">
          <div className="bg-textGray w-[150px] h-full aspect-square"></div>
        </div>
        <div className="p-4">
          <div className="bg-textGray w-[150px] h-full aspect-square"></div>
        </div>
      </Slider>
    </div>
  );
};

export default Clients;
