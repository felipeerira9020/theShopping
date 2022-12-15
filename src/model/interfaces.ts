interface Image {
  id: string;
  url: string;
}

export interface IProduct {
  name: string;
  image: Image[];
  description: string;
  stock: number;
  price: string;
  available: boolean;
  id: string;
}

export interface IProductResponse {
  product?: IProduct | any;
  setProduct?: React.Dispatch<React.SetStateAction<IProduct[]>> | any;
}
