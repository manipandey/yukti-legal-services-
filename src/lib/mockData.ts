import { Service, Lawyer, Blog, Testimonial } from "./types";

export const mockServices: Service[] = [
  {
    id: "1",
    title: "Corporate Law",
    description: "Expert legal guidance for corporations, startups, and enterprises in Nepal.",
    slug: "corporate-law",
    icon: "Briefcase"
  },
  {
    id: "2",
    title: "Company Registration",
    description: "Seamless and fully compliant company registration services at the OCR.",
    slug: "company-registration-nepal",
    icon: "Building"
  },
  {
    id: "3",
    title: "Foreign Investment Law",
    description: "Advising foreign investors on FDI regulations, approvals, and compliance.",
    slug: "foreign-investment-nepal",
    icon: "Globe"
  },
  {
    id: "4",
    title: "Property and Land Law",
    description: "Handling property disputes, land registration, and real estate transactions.",
    slug: "property-law-nepal",
    icon: "Landmark"
  },
  {
    id: "5",
    title: "Family Law & Divorce",
    description: "Sensitive and confidential legal representation for family disputes.",
    slug: "family-law",
    icon: "Users"
  },
  {
    id: "6",
    title: "Civil Litigation",
    description: "Strong representation in civil disputes in Nepalese courts.",
    slug: "civil-litigation",
    icon: "Gavel"
  }
];

export const mockLawyers: Lawyer[] = [
  {
    id: "1",
    name: "Apekshya Chalise",
    position: "Advocate & Managing Partner",
    experience: "10+ Years",
    qualifications: "LL.M.",
    specialization: "Corporate Law, FDI",
    image_url: "/placeholder-lawyer.jpg"
  },
  {
    id: "2",
    name: "Aakash Dhakal",
    position: "Advocate",
    experience: "8+ Years",
    qualifications: "LL.B., Advocate",
    specialization: "Civil Litigation, Property Law",
    image_url: "/placeholder-lawyer.jpg"
  },
  {
    id: "3",
    name: "Niru Dahal",
    position: "Advocate",
    experience: "8+ Years",
    qualifications: "LL.B., Advocate",
    specialization: "Company Registration, Tax Law",
    image_url: "/placeholder-lawyer.jpg"
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    client_name: "Rajesh Shrestha, CEO of TechNepal",
    content: "The firm provided exceptional guidance during our company's FDI approval process. Highly professional and deeply knowledgeable.",
    rating: 5
  },
  {
    id: "2",
    client_name: "Anita Gurung",
    content: "They handled my property dispute with utmost care and secured a favorable outcome. I strongly recommend their services.",
    rating: 5
  }
];

export const mockBlogs: Blog[] = [
  {
    id: "1",
    title: "A Complete Guide to Company Registration in Nepal (2024)",
    slug: "company-registration-nepal-guide",
    content: "<p>Registering a company in Nepal involves several steps at the Office of the Company Registrar (OCR). This guide outlines the essential procedures, required documents, and compliance metrics.</p>",
    category: "Company Registration",
    author_id: "1",
    seo_title: "How to Register a Company in Nepal | OCR Guide 2024",
    seo_meta: "Learn the step-by-step process of company registration in Nepal. Understand OCR requirements, costs, and timeline.",
    published_at: "2024-03-01T10:00:00Z"
  },
  {
    id: "2",
    title: "Understanding Foreign Direct Investment (FDI) Laws in Nepal",
    slug: "fdi-laws-nepal",
    content: "<p>Foreign investors looking at Nepal need to understand the Foreign Investment and Technology Transfer Act (FITTA). Here are the key sectors open for FDI and the approval process.</p>",
    category: "Foreign Investment",
    author_id: "1",
    seo_title: "Foreign Investment Laws in Nepal | FITTA Guide",
    seo_meta: "A comprehensive guide on Foreign Direct Investment (FDI) regulations in Nepal, focusing on the FITTA act and sector approvals.",
    published_at: "2024-03-10T12:00:00Z"
  }
];
