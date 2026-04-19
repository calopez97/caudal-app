# Caudal — Seguimiento de Inversiones y Patrimonio Personal
 
> *"El dinero que fluye con propósito, crece."*
 
---
 
## ¿Qué es Caudal?
 
**Caudal** es una aplicación web progresiva (PWA) para el seguimiento de inversiones y patrimonio personal. Permite a los usuarios registrar, organizar y visualizar sus activos financieros en un solo lugar, con soporte para acciones, criptomonedas, commodities, efectivo y activos personalizados.
Caudal está pensada para el inversionista individual que quiere claridad sobre su situación financiera sin depender de hojas de cálculo ni herramientas complejas.

## Tecnologías
 
### Frontend
| Tecnología | Uso |
|---|---|
| **React 1 - Next.js** | Librería principal de interfaz de usuario |
| **Recharts** | Gráficas de área, dona y métricas visuales |
| **CSS Variables** | Sistema de diseño con soporte automático para modo claro/oscuro |
| **Google Fonts** | Tipografías: Syne, Space Mono, Outfit |
 
### Almacenamiento — Fase 1
| Tecnología | Uso |
|---|---|
| **localStorage** | Persistencia de usuarios, portafolios y operaciones en el cliente |
 
### APIs externas
| API | Uso |
|---|---|
| **CoinGecko API** | Precios en tiempo real de criptomonedas (endpoint `/simple/price`) |
 
### Planeado para fases siguientes
| Tecnología | Uso previsto |
|---|---|
| **Next.js** | Framework fullstack con SSR y routing avanzado |
| **Supabase** | Backend as a Service: autenticación, base de datos y API REST |
| **PostgreSQL** | Base de datos relacional principal |
| **Polygon.io / Alpha Vantage** | Precios de acciones y commodities en tiempo real |

---
 
## Arquitectura
 
```
caudal/
├── src/
│   ├── components/
│   │   ├── Auth/              # Pantallas de login y registro
│   │   ├── Dashboard/         # Vista principal y gráficas
│   │   ├── Assets/            # Listado, detalle y formulario de activos
│   │   ├── Operations/        # Historial y formulario de operaciones
│   │   └── UI/                # Componentes reutilizables (Toast, Modal, etc.)
│   ├── hooks/
│   │   ├── useAuth.js         # Lógica de autenticación
│   │   └── usePortfolio.js    # Lógica del portafolio y activos
│   ├── utils/
│   │   ├── formatters.js      # Utilidades de formato (moneda, porcentaje, fecha)
│   │   └── calculations.js    # Cálculos de P&L y métricas
│   ├── constants/
│   │   └── assetTypes.js      # Tipos de activos, colores e íconos
│   └── App.jsx                # Componente raíz
├── public/
├── package.json
└── README.md
```
 
---
## Diseño y UX
 
Caudal utiliza un sistema de diseño oscuro con acentos en verde esmeralda (`#00c9a7`), pensado para transmitir confianza, claridad y sofisticación financiera. La interfaz está optimizada para uso en móvil con navegación por pestañas, hojas deslizables (bottom sheets) y acciones rápidas mediante botón flotante (FAB).
 
**Paleta principal**
| Token | Color | Uso |
|---|---|---|
| `--primary` | `#00c9a7` | Acciones positivas, ganancias, CTAs |
| `--danger` | `#f06060` | Pérdidas, eliminación, ventas |
| `--surface` | `#0d1823` | Tarjetas y componentes |
| `--bg` | `#070d17` | Fondo principal |
| `--text` | `#e2e8f0` | Texto principal |
| `--muted` | `#6b7f9a` | Texto secundario y etiquetas |
 
**Tipografías**
- **Syne** — Títulos y encabezados (personalidad de marca)
- **Space Mono** — Valores monetarios y datos numéricos
- **Outfit** — Cuerpo de texto e interfaz general
---
 
## Instalación y uso local
 
```bash
# Clonar el repositorio
git clone https://github.com/calopez97/caudal-app.git
cd caudal
 
# Instalar dependencias
npm install
 
# Iniciar servidor de desarrollo
npm run dev
 
# Compilar para producción
npm run build
```
 
---
 
## Autor
 *Camilo López*
Desarrollado como proyecto personal con visión de producto.
 
---
 
*Caudal — Porque el patrimonio no se acumula, se cultiva.*