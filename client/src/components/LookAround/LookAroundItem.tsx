import { useState, useEffect } from "react";
import { CategoryType } from "../../db/categories";
import { Link } from "react-router-dom";

const LookAroundItem = ({ ...category }: CategoryType) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(1);

  const images = category.images;

  useEffect(() => {
    let intervalId: any;
    if (hovered) {
      intervalId = setInterval(() => {
        setCurrentImgIndex((currentImgIndex + 1) % images.length);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [hovered, currentImgIndex, images]);

  const backgroundImage = hovered
    ? `url(${images[currentImgIndex]})`
    : `url(${images[0]})`;

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
    setCurrentImgIndex(0);
  }

  return (
    <Link
      to={`${category.link}`}
      className="block h-cardHeightDesktop w-cardWidthDesktop bg-center bg-cover cursor-pointer"
      style={{ backgroundImage }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="block pt-22 text-20 pb-sizeXl">{category.title}</span>
    </Link>
  );
};

export default LookAroundItem;
