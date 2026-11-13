# 👥 Gestor de Usuarios - Panel de Administración

Aplicación web interactiva desarrollada con **JavaScript Vanilla**, **HTML5** y **CSS3** para la gestión, registro, filtrado dinámico y visualización de usuarios.

---

## 📌 Descripción del Proyecto

Sistema ligero de administración y control de usuarios diseñado para ejecutarse en el navegador sin dependencias externas. Permite realizar operaciones CRUD básicas (creación, lectura y eliminación de registros), aplicar filtros interactivos por rol y estado operativo, y alternar dinámicamente entre vistas de tarjetas individuales y tablas tabulares mediante manipulación directa del DOM.

---

## ✨ Características Principales

### 📋 Gestión de Usuarios (CRUD)
- **Registro de Usuarios**: Formulario interactivo para dar de alta nuevos usuarios con nombre, rol y estado.
- **Eliminación por Nombre**: Búsqueda insensible a mayúsculas/minúsculas para remover registros específicos del arreglo.
- **Visualización en Tarjetas**: Renderizado dinámico de tarjetas de usuario con formateo automático (capitalización de texto).

### 🔍 Filtrado y Vistas Dinámicas
- **Filtro por Estado**: Filtrado instantáneo por estado operativo (*ej. activo / apagado*).
- **Filtro por Rol**: Búsqueda y agrupación por cargo (*ej. administrador, encargado, supervisor, técnico*).
- **Generación Dinámica de Tablas**: Conversión de la lista de usuarios en una tabla HTML completa con encabezados y bordes generados al vuelo.
- **Navegación Interactiva**: Botón dinámico de retorno (*Volver*) para restablecer la vista general sin recargar la página.
- **Pie de Página Dinámico**: Inyección dinámica de contenido informativo en el footer.

---

## 🛠️ Tecnologías y Herramientas

- **HTML5**: Estructura semántica del documento y elementos de formulario.
- **JavaScript (ES6+)**: Manipulación del DOM (`createElement`, `appendChild`, `innerHTML`), métodos de arreglos (`filter`, `map`, `findIndex`, `splice`, `forEach`) y manejo de eventos.
- **CSS3**: Estilos de interfaz, tarjetas y maquetación visual.

---

## 📂 Estructura del Proyecto

```plaintext
gestor-usuarios-js/
├── index.html       # Estructura principal y controles de la interfaz
├── controlador.js   # Lógica de negocio, funciones de filtrado y manipulación del DOM
├── style.css        # Estilos visuales de la aplicación
└── README.md        # Documentación técnica del proyecto
```

---

## 🚀 Instalación y Ejecución Local

No requiere la instalación de paquetes ni servidores backend.

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/TU-USUARIO/gestor-usuarios-js.git
   ```

2. **Acceder al directorio del proyecto**:
   ```bash
   cd gestor-usuarios-js
   ```

3. **Abrir en el navegador**:
   - Haz doble clic sobre el archivo `index.html` para abrirlo directamente en tu navegador.
   - O si utilizas **VS Code**, haz clic derecho en `index.html` y selecciona **Open with Live Server**.

