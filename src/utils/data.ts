import { Project, Skill, Service } from '../types'

export const skills: Skill[] = [
  {
    category: 'AI-Assisted Development & GenAI',
    items: ['Claude', 'ChatGPT', 'Gemini', 'LLM application development', 'Gemini API', 'Prompt Engineering', 'LangChain'],
  },
  {
    category: 'Backend & APIs',
    items: ['Python', 'FastAPI', 'Flask', 'RESTful API design', 'Node.js', 'ASP.NET MVC', 'C#', 'Entity Framework'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Supabase', 'SQL Server', 'MySQL', 'SQL', 'Relational schema design'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Flutter'],
  },
  {
    category: 'Data & Analytics',
    items: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'ETL pipelines', 'Data cleaning', 'EDA', 'MS Excel'],
  },
  {
    category: 'AI / ML',
    items: ['Scikit-learn', 'TensorFlow', 'XGBoost', 'NLP basics', 'OpenCV'],
  },
  {
    category: 'Engineering Practices',
    items: ['Git/GitHub', 'Software testing', 'SDLC', 'Technical documentation', 'OOP', 'Data structures & algorithms'],
  },
]

export const services: Service[] = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Developing and training AI/ML models, handling complex datasets, creating predictive models and data-driven solutions for your business challenges.',
    icon: 'Brain',
  },
  {
    id: 2,
    title: 'Business Intelligence',
    description: 'Freelance BI services including dashboards, KPI monitoring, and actionable insights to drive data-informed business decisions.',
    icon: 'BarChart3',
  },
  {
    id: 3,
    title: 'Data Solutions & Analytics',
    description: 'Building intelligent systems, predictive analytics, and data-driven decision support tools tailored to your specific needs.',
    icon: 'Zap',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'SafeTrip - AI-Based Trip Planning',
    description: 'An intelligent international trip-planning application that recommends the safest destinations based on real-time health and safety data analysis.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'API Development'],
  },
  {
    id: 2,
    title: 'Price Prediction Model',
    description: 'Advanced ML model for predicting product prices using historical data, market trends, and feature engineering techniques.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Regression Models'],
  },
  {
    id: 3,
    title: 'Intelligent Chatbot System',
    description: 'AI-powered chatbots for automated query handling and customer support with natural language processing capabilities.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'API Integration'],
  },
  {
    id: 4,
    title: 'Business Intelligence Dashboard',
    description: 'Comprehensive Power BI dashboard for KPI monitoring, sales analytics, and performance tracking with real-time data visualization.',
    technologies: ['Power BI', 'SQL', 'Excel', 'DAX'],
  },
  {
    id: 5,
    title: 'Classification & Regression Projects',
    description: 'Multiple machine learning projects involving classification models, regression analysis, and predictive modeling for various datasets.',
    technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Statistics'],
  },
  {
    id: 6,
    title: 'Management Systems',
    description: 'CRUD-based systems developed using C#, .NET frameworks, and MVC architecture for business process automation.',
    technologies: ['C#', '.NET', 'MVC', 'SQL Server'],
  },
]

export const educationBackground = {
  degree: 'B.Sc. Computer Science',
  university: 'Sir Syed University of Engineering and Technology, Karachi',
  semester: '2022 - 2026',
  specialization: 'CGPA: 3.29/4.0',
}

export const coursework = ['Data Structures & Algorithms', 'Machine Learning', 'Artificial Intelligence', 'Software Engineering', 'Database Systems', 'Software Testing']

export const certifications = ['Google AI Essentials (Google)', 'Google Data Analytics (Google)', 'AI for Business Professionals (HP LIFE / HP Foundation)', 'Data Analytics Internship Program (Elevvo)', 'Digital Marketing (TVM Solutions)']

export const experiences = [
  {
    role: 'AI/ML Intern',
    company: 'Alonze',
    period: 'Sep 2026 - Present',
    points: [
      'Work on AI/ML use cases covering problem definition, data preparation, model development, evaluation and deployment considerations.',
      'Study how to integrate AI solutions into real business workflows, selecting suitable models, APIs and tools for a given problem.',
      'Document methods, findings and recommendations to communicate technical results clearly to the team.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Elevvo Pathways',
    period: 'Sep 2025 - Nov 2025',
    points: [
      'Cleaned and preprocessed five real-world datasets covering fraud, streaming, retail sales, churn and house prices using Pandas and NumPy.',
      'Built and evaluated Logistic Regression, Random Forest, Decision Tree, Linear Regression and XGBoost models in scikit-learn.',
      'Delivered 5+ end-to-end projects in Jupyter Notebook with documented preprocessing steps and actionable insights.',
    ],
  },
  {
    role: 'Freelance Web Developer & Digital Marketer',
    company: 'Self-Employed',
    period: 'Remote',
    points: [
      'Sourced and onboarded clients and managed end-to-end delivery from requirement gathering to final handover.',
      'Designed and developed responsive websites for client needs; ran Meta ad campaigns and managed client social media accounts.',
    ],
  },
]

export const fyp = {
  title: 'SafeTrip - AI-Based International Trip Planning',
  description: 'An LLM-based travel safety platform using the Gemini API to analyze health and safety data and recommend safer destinations for international travelers.',
}
