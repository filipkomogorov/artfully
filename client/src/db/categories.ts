import carSticker_00 from "../assets/categories/carSticker_00.png";
import carSticker_01 from "../assets/categories/carSticker_01.png";
import carSticker_02 from "../assets/categories/carSticker_02.png";
import carSticker_03 from "../assets/categories/carSticker_03.png";

import laptop_00 from '../assets/categories/laptop_00.png'
import laptop_01 from '../assets/categories/laptop_01.png'
import laptop_02 from '../assets/categories/laptop_02.png'
import laptop_03 from '../assets/categories/laptop_03.png'

import canvas_00 from '../assets/categories/canvas_00.png'
import canvas_01 from '../assets/categories/canvas_01.png'
import canvas_02 from '../assets/categories/canvas_02.png'
import canvas_03 from '../assets/categories/canvas_03.png'

import other_00 from '../assets/categories/other_00.png'
import other_01 from '../assets/categories/other_01.png'

// TODO - make the images smaller 

export type CategoryType = {
    title: string;
    images: Array<string>;
    link: string
}

export const categories:Array<CategoryType> = [
  {
    title: "Стикери за кола",
    images: [carSticker_00, carSticker_01, carSticker_02, carSticker_03],
    link: "/products/stickers/cars",
  },
  {
    title: "Стикери за лаптопи и други",
    images: [laptop_00, laptop_01, laptop_02, laptop_03],
    link: "/products/stickers/others",
  },
  {
    title: "Персонализирай стикер",
    images: [carSticker_01, carSticker_00, carSticker_02, carSticker_03],
    link: "/makeasticker",
  },
  {
    title: "Картини и пана",
    images: [canvas_00, canvas_01, canvas_02, canvas_03],
    link: "/products/art",
  },
  {
    title: "Други",
    images: [other_00, other_01],
    link: "/products/other",
  },
];
