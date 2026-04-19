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
| **Next.js 16.2.2** | Framework fullstack con App Router, SSR y routing avanzado |
| **React 19.2.4** | Librería principal de interfaz de usuario |
| **TypeScript** | Tipado estático para mayor robustez |
| **Tailwind CSS v4** | Framework de estilos utilitarios con variables CSS |
| **Shadcn/ui** | Componentes de UI reutilizables y accesibles |
| **Recharts** | Gráficas de área, dona y métricas visuales |
| **React Hook Form + Zod** | Manejo de formularios con validación |
| **Lucide React & Phosphor Icons** | Iconografía consistente |
| **React Hot Toast** | Notificaciones de usuario |
| **Base UI React** | Componentes adicionales de UI |
| **CSS Variables** | Sistema de diseño con soporte automático para modo claro/oscuro |
| **Geist & JetBrains Mono** | Tipografías modernas para interfaz |
 
### Backend & Almacenamiento
| Tecnología | Uso |
|---|---|
| **Supabase** | Backend as a Service: autenticación, base de datos y API REST |
| **PostgreSQL** | Base de datos relacional principal (a través de Supabase) |
 
### APIs externas
| API | Uso |
|---|---|
| **CoinGecko API** | Precios en tiempo real de criptomonedas (endpoint `/simple/price`) |
 
### Herramientas de desarrollo
| Tecnología | Uso |
|---|---|
| **ESLint** | Linting y calidad de código |
| **PostCSS** | Procesamiento de CSS |
| **Tailwind Merge & Clsx** | Utilidades para clases CSS dinámicas |
| **Class Variance Authority** | Variantes de componentes |

---
 
## Arquitectura
 
```
investment-tracker/
├── app/                      # App Router de Next.js
│   ├── globals.css           # Estilos globales y variables CSS
│   ├── layout.tsx            # Layout raíz de la aplicación
│   ├── page.tsx              # Página principal
│   ├── dashboard/            # Dashboard del usuario
│   ├── login/                # Página de inicio de sesión
│   └── new-asset/            # Formulario para nuevos activos
├── components/               # Componentes reutilizables
│   ├── ui/                   # Componentes base de Shadcn/ui
│   ├── auth/                 # Componentes de autenticación
│   └── PortfolioChart.tsx    # Gráfica del portafolio
├── lib/                      # Utilidades y configuración
│   ├── utils.ts              # Funciones auxiliares
│   ├── services/             # Servicios de negocio
│   │   ├── assetService.ts   # Gestión de activos
│   │   ├── marketPriceService.ts # Precios de mercado
│   │   ├── portfolio.ts      # Lógica del portafolio
│   │   └── userService.ts    # Gestión de usuarios
│   └── supabase/             # Configuración de Supabase
│       ├── client.ts         # Cliente para navegador
│       └── server.ts         # Cliente para servidor
├── public/                   # Archivos estáticos
├── package.json
├── tailwind.config.ts        # Configuración de Tailwind
├── next.config.ts            # Configuración de Next.js
├── eslint.config.mjs         # Configuración de ESLint
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
- **Geist Sans** — Interfaz general y títulos
- **Geist Mono** — Código y datos técnicos
- **JetBrains Mono** — Valores monetarios y datos numéricos
---
 
## Instalación y uso local
 
```bash
# Clonar el repositorio
git clone https://github.com/calopez97/caudal-app.git
cd caudal-app
 
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