import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
}

export interface CreateProduct {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  images: FileList;
}

export interface CreateProductWithForm {
  images: FileList;
  product: CreateProduct;
}

export interface ModifyProductWithForm {
  id: number;
  update: Partial<CreateProduct>;
  images: FileList;
  oldimages: string[];
}

export interface ProductList {
  list: Product[];
}
export interface ProductDetail {
  info: Product;
}
export interface ProductPagination {
  offset: number;
  limit: number;
  search?: string;
  categoryId?: number;
  price_min?: number;
  price_max?: number;
}
export interface ProductOpPagination {
  search?: string;
  categoryId?: number;
  price_min?: number;
  price_max?: number;
}

export interface ProductReducer {
  productList: Product[];
  productDetail?: Product;
  count?: number;
}

export interface ListTableColumn {
  id: "title" | "category" | "description" | "price" | "action";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

export type ProductSort = "asc" | "desc";
