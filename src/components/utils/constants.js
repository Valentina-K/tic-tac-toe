import broun from "../../pictures/catbroun.png";
import black from "../../pictures/catblack.png";
import pink from "../../pictures/catpink.png";
import ginger from "../../pictures/catginger.png";

export const settings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  className: "slider",
};

export const images = [
  {
    id: 1,
    src: black,
    alt: "player 1",
  },
  {
    id: 2,
    src: broun,
    alt: "player 2",
  },
  {
    id: 3,
    src: ginger,
    alt: "player 3",
  },
  {
    id: 4,
    src: pink,
    alt: "player 4",
  },
];
