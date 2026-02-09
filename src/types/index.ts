// Tipos globais para o projeto

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  specifications: Specification[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface AnimationConfig {
  initial: Record<string, string | number | boolean>;
  animate: Record<string, string | number | boolean>;
  transition?: Record<string, string | number | boolean>;
  exit?: Record<string, string | number | boolean>;
}

export interface ThemeColors {
  primary: ColorShades;
  secondary: ColorShades;
  accent: ColorShades;
  button: GradientColors;
  background: GradientColors;
  text: TextColors;
}

export interface ColorShades {
  light: string;
  main: string;
  dark: string;
}

export interface GradientColors {
  from: string;
  to: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  white: string;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface CameraConfig {
  position: [number, number, number];
  fov: number;
}

export interface ModelConfig {
  scale: number;
  position: [number, number, number];
  rotation?: [number, number, number];
}

// Event handlers types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
