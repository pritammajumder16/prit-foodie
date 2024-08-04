export interface IFeaturedRow {
  name: string;
  short_description: string;
  id: string;
  restaurants: string[];
}
export interface IRestaurant {
  address: string;
  categoryId: string;
  dishes: string[];
  id: string;
  image: string;
  lat: string;
  long: string;
  name: string;
  rating: string;
  short_description: string;
}

export interface IDish {
  image: string;
  name: string;
  price: number;
  short_description: string;
  id: string;
}

export interface IType {
  name: string;
}
export interface ICategory {
  image: any;
  name: string;
  id: string;
}
