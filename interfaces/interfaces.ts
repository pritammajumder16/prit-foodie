export interface IFeaturedRow {
  name: string;
  short_description: string;
  _createdAt: string;
  _id: string;
  _type: string;
  _updatedAt: string;
  restaurants?: IRestaurant[];
}
export interface IRestaurant {
  address: string;
  lat: number;
  long: number;
  name: string;
  rating: number;
  short_description: string;
  _createdAt?: string;
  _id: string;
  _type?: string;
  _updatedAt?: string;
  dishes?: IDish[];
  image: any;
  type: IType;
}

export interface IDish {
  Image: any;
  name: string;
  price: number;
  short_description: string;
  _createdAt: string;
  _id: string;
  _type: string;
  _updatedAt: string;
}

export interface IType {
  name: string;
}
export interface ICategory {
  image: any;
  name: string;
  _createdAt: string;
  _id: string;
  _type: string;
  _updatedAt: string;
}
