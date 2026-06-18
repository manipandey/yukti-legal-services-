export type Service = {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
};

export type Lawyer = {
  id: string;
  name: string;
  position: string;
  experience: string;
  qualifications: string;
  specialization: string;
  image_url: string;
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  author_id: string;
  seo_title: string;
  seo_meta: string;
  published_at: string;
};

export type Consultation = {
  id: string;
  name: string;
  email: string;
  phone: string;
  legal_issue: string;
  message: string;
  status: 'pending' | 'reviewed' | 'contacted';
  created_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  content: string;
  rating: number;
};
