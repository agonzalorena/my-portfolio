import type { ComponentType, SVGProps } from "react";
import { GithubIcon, LinkedinIcon } from "./svgs";

export interface Project {
  name: string;
  description: string;
  challenge: string;
  link: string | null;
  img: string;
}

export interface Connection {
  id: number;
  name: string;
  link: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface Experience {
  id: number;
  type: "Trabajo" | "Estudio";
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const projectList: Project[] = [
  {
    name: "WellStream",
    description:
      "Plataforma de procesamiento de telemetría IoT en tiempo real orientada a la industria energética, diseñada para monitorear métricas críticas de pozos y disparar alertas automatizadas ante anomalías.",
    challenge:
      "Diseñé e implementé una arquitectura orientada a eventos (Event-Driven) desacoplada en microservicios: un simulador de métricas (temperatura, presión, caudal), un servicio analizador que procesa los eventos consumidos desde tópicos de Apache Kafka para calcular promedios y detectar valores críticos, y un módulo de notificaciones que transmite métricas y alertas en vivo a un dashboard vía Server-Sent Events (SSE). Integré persistencia histórica de datos y visualizaciones operativas con Grafana.",
    link: "https://github.com/agonzalorena/WellStream",
    img: "/wellStream-img.png",
  },
  {
    name: "Home Lab",
    description:
      "Servidor privado y entorno de red de alta disponibilidad (24/7) diseñado para el alojamiento seguro, automatizado y autogestionado de microservicios propios y herramientas de infraestructura.",
    challenge:
      "Diseñé una arquitectura local orquestada con Docker Compose para alojar servicios de domótica e infraestructura como Home Assistant, AdGuard Home y Jellyfin, junto a las bases de datos y backends de mis aplicaciones (Java, Spring Boot, automatizaciones con IA). Configuré una infraestructura de red segmentada mediante VLANs y reglas de firewall para aislar el tráfico de domótica e IoT. Para el acceso exterior seguro, implementé túneles DNS vía Cloudflare con dominio propio y una conexión VPN con WireGuard.",
    link: null,
    img: "/sv-img.png",
  },
  {
    name: "Padel Global Score",
    description:
      "Sistema integral para el seguimiento de historial y estadísticas entre parejas de pádel, que registra encuentros y genera métricas comparativas detalladas a lo largo del tiempo.",
    challenge:
      "Diseñé e implementé una arquitectura de microservicios con Spring Boot dividida en dos módulos principales: un servicio core para la gestión del sistema, partidos y estadísticas, y un microservicio independiente de notificaciones. Este último se conecta con la API de Google AI para redactar mensajes dinámicos y los envía automáticamente a Telegram para notificar nuevos encuentros y resultados.",
    link: "https://github.com/agonzalorena/padel-global-score",
    img: "/padel-img.png",
  },
  {
    name: "ShortURL",
    description:
      "Acortador de enlaces liviano diseñado para generar URLs compactas y gestionar la redirección rápida de enlaces de forma directa y eficiente.",
    challenge:
      "Construí la aplicación integrando Firebase para el almacenamiento persistente de los mappings entre URLs. Implementé una función de generación de hashes aleatorios de 5 caracteres basada en crypto-random-string para garantizar claves cortas, limpias y únicas en cada redirección.",
    link: "https://github.com/agonzalorena/shorturl",
    img: "/shorturl-img.png",
  },
];

export const connectList: Connection[] = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/agonzalorena",
    icon: GithubIcon,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/agonzalorena/",
    icon: LinkedinIcon,
  },
];

export const experienceList: Experience[] = [
  {
    id: 2,
    type: "Trabajo",
    title: "Desarrollador Frontend.",
    organization: "Freelance",
    period: "2023 - 2023",
    description:
      "Fui contratado para desarrollar de forma integral el frontend de la web de un hotel en Chile. El proyecto presentó dos grandes desafíos: por un lado, una rápida curva de adaptación para migrar de React a Next.js según las necesidades técnicas; por el otro, la definición del diseño UI/UX desde cero para darle forma a requerimientos de cliente que inicialmente eran ambiguos. Trabajé de forma 100% autónoma y sin supervisión, gestionando mis propios tiempos y enviando reportes de avance periódicos al desarrollador principal para asegurar la calidad y alineación del producto final.",
  },
  {
    id: 1,
    type: "Estudio",
    title:
      "Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas.",
    organization: "UNICEN",
    period: "2022 - 2025",
    description:
      "Carrera finalizada con fuerte enfoque en ingeniería de software y desarrollo backend:\n• Programación Orientada a Objetos y algoritmos avanzados (Java).\n• Diseño de Arquitecturas Web, APIs REST y ecosistema de Microservicios (Spring Boot).\n• Modelado y gestión de Bases de Datos relacionales.\n• Configuración y despliegue de aplicaciones en redes.\n• Metodologías de desarrollo, control de versiones y validación de software.",
  },
];

export const projectsUrl: string =
  "https://github.com/agonzalorena?tab=repositories";

export const stackList: string[] = [
  "Java",
  "Spring Boot",
  "Docker",
  "React",
  "Next",
  "Tailwind",
  "Git",
  "SQL",
  "Firebase",
  "Grafana",
  "REST APIs",
  "Microservices",
  "Event-Driven Architecture",
  "Kafka",
  "WebSockets",
  "GitHub Actions",
  "Vercel",
  "Cloudflare",
  "Linux",
  "AI Tools",
];
