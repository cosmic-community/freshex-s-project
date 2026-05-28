export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
  };
}

export interface Supplier extends CosmicObject {
  type: 'suppliers';
  metadata: {
    name?: string;
    bio?: string;
    location?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    unit?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    in_stock?: boolean;
    origin?: string;
    category?: Category;
    supplier?: Supplier;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}