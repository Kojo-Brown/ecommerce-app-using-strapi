export enum Category {
  men,
  women,
  kids,
}

export enum Color {
  "white",
  "black",
  "blue",
  "red",
  "multi-coloured",
  "yellow",
  "brown",
  "green",
}

export enum ItemAvailability {
  "hot",
  "newArrivals",
  "topRated",
}

export interface Product {
  id: number;
  attributes: {
    title: string;
    longDescription: string;
    price: number;
    image: {
      data: {
        attributes: {
          formats : {
            medium: {
              url: string
            }
          }
        }
      }
    };
    category: Category;
    stock: number;
    color: Color;
    itemAvailability: ItemAvailability;
    ratings: number;
  };
  count: number;
}
