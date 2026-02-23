import { Project, Skill, Service } from '../types'

export const skills: Skill[] = [
  {
    category: 'AI & Machine Learning',
    items: ['Model Training', 'Predictive Modeling', 'Classification', 'Regression', 'Deep Learning', 'Neural Networks'],
  },
  {
    category: 'Data Analysis & BI',
    items: ['Data Cleaning', 'EDA', 'Data Visualization', 'KPI Analysis', 'Power BI', 'Excel'],
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'SQL', 'C', 'C++', 'C#', '.NET'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Jupyter Notebook', 'Git & GitHub', 'Power BI', 'Excel', 'VS Code', 'Visual Studio'],
  },
  {
    category: 'Soft Skills',
    items: ['Analytical Thinking', 'Problem Solving', 'Client Communication', 'Technical Documentation'],
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
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  university: 'Sir Syed University of Engineering & Technology',
  semester: '7th Semester',
  specialization: 'Data Science & AI',
}

export const fyp = {
  title: 'SafeTrip - AI-Based International Trip Planning',
  description: 'An intelligent application that analyzes health and safety data to recommend the safest destinations for international travelers.',
}
