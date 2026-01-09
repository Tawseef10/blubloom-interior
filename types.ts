export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
