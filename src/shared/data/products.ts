import frame32 from "../../images/Frame 32.png";
import frame321 from "../../images/Frame 32 (1).png";
import frame33 from "../../images/Frame 33.png";
import frame331 from "../../images/Frame 33 (1).png";
import frame34 from "../../images/Frame 34.png";
import frame341 from "../../images/Frame 34 (1).png";
import frame38 from "../../images/Frame 38.png";
import frame381 from "../../images/Frame 38 (1).png";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  discount?: number;
}

export const newArrivals: Product[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: frame32,
    price: 120,
    rating: 4.5
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: frame321,
    price: 240,
    originalPrice: 260,
    rating: 3.5,
    discount: 20
  },
  {
    id: 3,
    name: "Checkered Shirt",
    image: frame33,
    price: 180,
    rating: 4.5
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: frame331,
    price: 130,
    originalPrice: 160,
    rating: 4.5,
    discount: 30
  }
];

export const topSelling: Product[] = [
  {
    id: 5,
    name: "Vertical Striped Shirt",
    image: frame34,
    price: 212,
    originalPrice: 232,
    rating: 5.0,
    discount: 20
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    image: frame341,
    price: 145,
    rating: 4.0
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    image: frame38,
    price: 80,
    rating: 3.0
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    image: frame381,
    price: 210,
    rating: 4.5
  }
];