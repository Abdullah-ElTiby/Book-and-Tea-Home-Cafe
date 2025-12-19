export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: string;
  subcategory?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: boolean; // If true, spans 2 columns in grid
}

export interface NavLink {
  label: string;
  href: string;
}