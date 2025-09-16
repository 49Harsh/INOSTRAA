import { WebsiteContent } from '@/types/websiteContent';

/**
 * Complete website content data for the IT company
 * All content is properly typed and organized for easy consumption
 */
const websiteContent: WebsiteContent = {
  companyInfo: {
    name: "Innos",
    tagline: "Empowering Businesses Through Digital Excellence",
    visionMission: {
      vision: "To become a trusted global name in IT by continuously evolving with technology and delivering digital excellence that drives client success.",
      mission: "To empower businesses through intelligent, tailor-made digital solutions that foster innovation, streamline operations, and create lasting value."
    },
    techStack: ["React", "Flutter", "Node.js", "Laravel"]
  },

  services: [
    {
      id: "mobile-app-development",
      category: "mobile-app",
      title: "Mobile App Development",
      description: "From concept to deployment, we create intuitive and high-performance mobile apps for both Android and iOS that deliver seamless user experiences.",
      features: [
        "Native & Hybrid App Development",
        "UI/UX for mobile interfaces",
        "Maintenance & scaling",
        "API & third-party integrations"
      ]
    },
    {
      id: "website-development",
      category: "website",
      title: "Website Development",
      description: "We build modern, responsive, SEO-optimized websites tailored to your brand and business needs — whether it's a company portfolio, e-commerce store, or custom web portal.",
      features: [
        "Business websites",
        "E-commerce websites",
        "Landing pages & UI/UX Design"
      ]
    },
    {
      id: "custom-software-development",
      category: "custom-software",
      title: "Custom Software Development",
      description: "We design and develop software systems that align with your business processes, offering functionality, scalability, and reliability.",
      features: [
        "Business automation tools",
        "Tailored dashboards and analytics"
      ]
    }
  ],

  portfolio: [
    {
      id: "project-a",
      name: "Project A - Run Marine Services",
      url: "https://www.runmarine-services.com/",
      description: "Marine services website with comprehensive service offerings",
      category: "website"
    },
    {
      id: "project-b", 
      name: "Project B - Milan Manch",
      url: "https://milanmanch.com/",
      description: "Community platform and event management system",
      category: "website"
    }
  ],

  features: [
    {
      id: "young-dynamic-team",
      title: "Young, dynamic & client-focused team",
      description: "Our team brings fresh perspectives and dedicated client service"
    },
    {
      id: "agile-development",
      title: "Agile development with quick turnaround",
      description: "Fast, iterative development process ensuring timely delivery"
    },
    {
      id: "personalized-solutions",
      title: "Personalized solutions, not just templates",
      description: "Custom-built solutions tailored to your specific business needs"
    },
    {
      id: "transparent-communication",
      title: "Transparent communication & support",
      description: "Clear, honest communication throughout the project lifecycle"
    },
    {
      id: "future-ready-tech",
      title: "Future-ready tech stack",
      description: "Using modern technologies like React, Flutter, Node.js, Laravel"
    }
  ],

  milestones: [
    {
      id: "growth-development",
      title: "Growth and Development",
      description: "An overview of the company's growth and development over the years, showcasing key phases and strategies.",
      category: "growth"
    },
    {
      id: "milestones-achieved",
      title: "Milestones Achieved", 
      description: "This part outlines significant milestones achieved by the company that have shaped its trajectory.",
      category: "achievement"
    }
  ],

  techSolutions: [
    {
      id: "consulting-services",
      title: "Consulting Services",
      description: "The company offers expert consulting services to help clients optimize their operations and achieve their business objectives effectively."
    },
    {
      id: "technology-solutions",
      title: "Technology Solutions",
      description: "Our technology solutions include software development and IT support tailored to meet the specific needs of our clients."
    },
    {
      id: "customer-support",
      title: "Customer Support",
      description: "We provide comprehensive customer support services to ensure client satisfaction and resolve issues efficiently."
    }
  ],

  teamIntro: {
    importance: "Introducing the team builds trust with clients, showing that real professionals are behind the business.",
    qualifications: "Highlighting the qualifications of team members demonstrates their expertise and the value they bring to the company.",
    clientTrust: "Demonstrating the team's experience fosters trust with clients, enhancing business relationships."
  },

  seoContent: {
    userExperience: "A well-designed user interface provides a positive user experience, which can keep visitors on the page longer and promote exploration",
    keywordOptimization: "Keyword optimization involves researching and using relevant keywords to improve visibility in search engine results.",
    metaDescriptions: "Crafting effective meta descriptions can significantly enhance click-through rates by attracting more users to your site.",
    profileOptimization: "An optimized profile page is essential for attracting relevant traffic and improving user engagement on your website"
  },

  socialContact: {
    socialMediaImportance: "Integrating social media links enables easy access for potential clients to connect with your brand and services.",
    contactInformation: "Providing clear and accessible contact information is essential for facilitating inquiries and improving customer service.",
    clientRelationships: "Effective integration of social media and contact info strengthens relationships and encourages client engagement."
  },

  responsivenessContent: {
    importance: "Mobile responsiveness is crucial as many users access websites on their mobile devices, impacting overall engagement.",
    accessibility: "A responsive design makes websites more accessible, allowing users to navigate easily regardless of device used.",
    userExperience: "Responsive designs significantly enhance the user experience, leading to increased satisfaction and retention."
  }
};

export default websiteContent;

// Named exports for tree-shaking and selective imports
export const { 
  companyInfo, 
  services, 
  portfolio, 
  features, 
  milestones, 
  techSolutions, 
  teamIntro, 
  seoContent, 
  socialContact, 
  responsivenessContent 
} = websiteContent;
