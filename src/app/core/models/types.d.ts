export interface User {
  id?: string;
  email?: string;
  pass?: string;
  name?: string;
  surname?: string;
  phone?: string;
  role?: string;
  photo?: string;
}

export interface Client {
  id?: string;
  email?: string;
  pass?: string;
  name?: string;
  surname?: string;
  phone?: string;
  role?: string;
  photo?: string;
}

export interface Company {
  id?: number;
  code?: string;
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  category?: string;
  quantity?: number;
  inventoryStatus: string;
  rating?: number;
}
