# Ejercicio 9 · Reto final: mi portfolio profesional

Crea tu **portfolio profesional** como desarrollador/a web usando Bootstrap.
No es un ejercicio más: es tu **carta de presentación** para las empresas tecnológicas
donde harás las prácticas (FFEOE) o a las que enviarás tu candidatura.
El contenido debe ser **real, cuidado y fácil de actualizar**.

## Secciones obligatorias

| Sección | Qué debe incluir |
|---|---|
| **Navbar** | Tu nombre o logotipo personal y enlaces a todas las secciones. Responsive y fija (`sticky-top`). |
| **Portada · Sobre mí** | Foto profesional o avatar, nombre, titular (p. ej. *Desarrollador web junior · DAW*), 2–3 líneas sobre ti y botones **Ver proyectos** y **Descargar CV** (PDF). |
| **Habilidades** | Tecnologías agrupadas (Front-end, Back-end, Bases de datos, Herramientas) con badges o iconos. Idiomas y competencias transversales. |
| **Proyectos** | Mínimo **3 proyectos** en cards: captura, descripción, tecnologías (badges) y enlaces a **demo** y **repositorio de GitHub**. Valen proyectos de clase bien presentados. |
| **Formación y experiencia** | CFGS DAW, prácticas, cursos y certificaciones (`list-group`, `accordion` o línea de tiempo). |
| **Contacto** | Formulario con validación + enlaces a email profesional, LinkedIn y GitHub. |
| **Footer** | Copyright, iconos de redes con `aria-label` y fecha de última actualización. |

## Requisitos técnicos

- Bootstrap 5.3 por CDN y el mínimo CSS propio en `css/estilos.css` (tus colores de marca).
- Al menos **un componente JavaScript**: modal con el detalle de un proyecto, accordion, carousel, tooltips o modo claro/oscuro.
- Correcto en móvil (375 px), tablet (768 px) y escritorio (1200 px+), sin scroll horizontal.
- HTML semántico y válido (https://validator.w3.org), `<meta name="description">`, favicon y `<title>` con tu nombre.
- Imágenes optimizadas (WebP/JPG, < 300 KB) con texto `alt`, guardadas en `img/`. Tu CV en PDF en `docs/`.
- **Publicado en GitHub Pages** desde un repositorio propio con un `README.md` cuidado.

## Privacidad

Usa un **email profesional**. No publiques tu dirección completa, DNI ni teléfono personal si no quieres.

## Rúbrica orientativa (10 puntos)

| Criterio | Descripción | Puntos |
|---|---|---|
| Contenido profesional | Textos claros y sin faltas, perfil definido, proyectos bien explicados, CV descargable | 2 |
| Rejilla y responsive | `container`/`row`/`col` y breakpoints; perfecto en móvil, tablet y escritorio | 2 |
| Componentes Bootstrap | Navbar, cards de proyectos, formulario con validación y footer | 1,5 |
| Diseño y marca personal | Estilo coherente (colores, tipografía, espaciado), aspecto profesional | 1,5 |
| Estructura y semántica | HTML5 válido, etiquetas semánticas, jerarquía de títulos correcta | 1 |
| Despliegue | Publicado en GitHub Pages; repositorio ordenado con README | 1 |
| Componente JS | Modal, accordion, carousel, tooltips o modo oscuro funcionando | 0,5 |
| Accesibilidad y buenas prácticas | `alt`, contraste, `aria-label`, meta description, imágenes optimizadas | 0,5 |

## Publicar en GitHub Pages (resumen)

1. Crea un repositorio, por ejemplo `portfolio`, y sube el contenido de esta carpeta (`index.html` en la raíz).
2. En el repositorio: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. En un par de minutos tu web estará en `https://TU-USUARIO.github.io/portfolio/`.
