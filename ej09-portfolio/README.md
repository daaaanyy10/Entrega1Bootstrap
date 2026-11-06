# Portfolio profesional - Dany Megías Maya

Portfolio como desarrollador web junior (DAW) para la tarea UD5.

🔗 **Web publicada:** https://TU-USUARIO.github.io/portfolio/

## Tecnologías usadas
- HTML5 semántico
- CSS3 (variables de Bootstrap y clases propias)
- Bootstrap 5.3.3 y Bootstrap Icons 1.11.3 (por CDN)
- JavaScript (modo claro/oscuro, modal de proyectos y validación del formulario)
- GitHub Pages para el despliegue

## Paleta de colores y contraste

| Uso | Color | Fondo | Ratio | Resultado |
|---|---|---|---|---|
| Texto normal (tema claro) | `#212529` | `#FFFFFF` | 15,4:1 | AA ✅ |
| Texto secundario | `#495057` | `#FFFFFF` | 8,2:1 | AA ✅ |
| Color de marca (enlaces y titular) | `#1D4ED8` | `#FFFFFF` | 6,7:1 | AA ✅ |
| Color de marca sobre fondo gris claro | `#1D4ED8` | `#F1F5F9` | 6,1:1 | AA ✅ |
| Texto de botones | `#FFFFFF` | `#1D4ED8` | 6,7:1 | AA ✅ |
| Texto normal (tema oscuro) | `#DEE2E6` | `#212529` | 11,8:1 | AA ✅ |
| Enlaces (tema oscuro) | `#8FB0FF` | `#212529` | 7,2:1 | AA ✅ |
| Borde de campos (claro) | `#6C757D` | `#FFFFFF` | 4,7:1 | AA ✅ (mín. 3:1) |

> Comprueba los números en https://webaim.org/resources/contrastchecker/ antes de entregar.

## Informe de calidad
Capturas guardadas en `docs/evidencias/`:

- Lighthouse (móvil): `docs/evidencias/lighthouse.png`
- WAVE: `docs/evidencias/wave.png`
- Validador HTML del W3C: `docs/evidencias/validador-html.png`
- Validador CSS del W3C: `docs/evidencias/validador-css.png`

## Declaración de uso de IA
He utilizado Claude (Anthropic) como ayuda para generar la primera versión del código del portfolio. Después he revisado el código, he cambiado los textos y los datos por los míos, y he pasado yo mismo las pruebas de calidad (Lighthouse, WAVE y validadores del W3C).

## Estructura
```
portfolio/
├── index.html
├── css/estilos.css
├── js/main.js
├── img/
├── docs/
│   ├── cv.pdf
│   └── evidencias/
└── README.md
```