export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  image?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
}
