# Publica tu proyecto en GitHub Pages

Tu URL quedará así:

```
https://tu-usuario.github.io/nombre-del-repositorio/
```

---

## Índice

1. [¿Qué es GitHub Pages?](#qué-es-github-pages)
2. [Antes de empezar](#antes-de-empezar)
3. [Paso a paso](#paso-a-paso)
4. [Cómo deben estar organizados tus archivos](#cómo-deben-estar-organizados-tus-archivos)
5. [Algo no funciona](#algo-no-funciona)

---

## ¿Qué es GitHub Pages?

Es un servicio de GitHub que coge los archivos de tu repositorio y los sirve como una web pública. Sin contratar nada, sin configurar servidores. Funciona con HTML, CSS y JavaScript estático — exactamente lo que habéis hecho en clase.

Cada vez que actualizas el repositorio, la página se actualiza sola en uno o dos minutos.

---

## Antes de empezar

Dos cosas que necesitas:

- Cuenta en [GitHub](https://github.com) (gratuita)
- Tu proyecto con un `index.html` en la carpeta raíz

Si no tienes cuenta, créala primero. Tarda dos minutos.

---

## Paso a paso

### 1. Crea el repositorio

Entra a [github.com](https://github.com) y haz clic en el botón verde **"New"**.
<img width="2086" height="1352" alt="Group 14" src="https://github.com/user-attachments/assets/dd03675a-72e2-4d07-b024-3a949726d4ce" />

- Dale un nombre al repositorio: algo como `mi-proyecto-web`.
- Podeis poner una descripcion pero no es necesario.
- Ponlo en **Public**. Si está en Private, GitHub Pages no funciona en la cuenta gratuita.
- Haz clic en **"Create repository"**.
<img width="2086" height="2076" alt="Group 13" src="https://github.com/user-attachments/assets/d88b8762-f111-45d8-8562-7f60a5141e2f" />

### 2. Sube tus archivos

Dentro del repositorio, ve a **"uploading an existing file"**.
<img width="2086" height="1410" alt="Group 12" src="https://github.com/user-attachments/assets/53c29f55-ebd9-426c-bbaa-0fb7fa366751" />

Arrastra todos los archivos de tu proyecto: el HTML, el CSS, el JS, las imágenes, todo. En el campo de abajo escribe algo como `Subida inicial` y haz clic en **"Commit changes"**.
<img width="2086" height="1318" alt="Group 11" src="https://github.com/user-attachments/assets/ca3cdb52-0e49-4d47-be3e-75c2d8b5caff" />
<img width="2086" height="666" alt="Group 10" src="https://github.com/user-attachments/assets/71f20192-d44e-4255-a3ac-dc9085ea1603" />

> ⚠️ El archivo principal tiene que llamarse **`index.html`**, en minúsculas, y estar suelto en la raíz, no dentro de ninguna carpeta.

### 3. Activa GitHub Pages

Ve a **Settings** (arriba del repositorio) → **Pages** (en el menú lateral).
<img width="2086" height="1194" alt="Group 9" src="https://github.com/user-attachments/assets/a7082012-61c6-437f-8363-f71b965342fd" />
<img width="574" height="1154" alt="Group 8" src="https://github.com/user-attachments/assets/4a3432ef-92af-4d48-8128-7a5e2151b6ca" />

En el apartado _Branch_, selecciona **`main`** y la carpeta **`/ (root)`**. Guarda.
<img width="2086" height="1376" alt="Group 7" src="https://github.com/user-attachments/assets/da6c5c84-d663-47d3-859e-fb61a0d24f7e" />

### 4. Abre tu página

Espera un par de minutos y recarga. Verás este mensaje:

```
Your site is live at https://tu-usuario.github.io/mi-proyecto-web/
```

Copia ese enlace y compártelo.

---

## Cómo deben estar organizados tus archivos

```
mi-proyecto-web/
│
├── index.html        ← tiene que estar aquí, en la raíz
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
└── img/
    └── foto.jpg
```

Una cosa importante: usa **rutas relativas** en tu HTML. En tu ordenador funcionan las rutas absolutas, pero en GitHub Pages no.

```html
<!-- Bien -->
<link rel="stylesheet" href="css/styles.css" />
<img src="img/foto.jpg" alt="..." />

<!-- Mal — esto solo funciona en tu máquina -->
<link rel="stylesheet" href="C:/Users/tu-nombre/proyecto/css/styles.css" />
```

---

## Algo no funciona

**Sale error 404**

Comprueba que el archivo se llama `index.html` en minúsculas y que está en la raíz, no dentro de una carpeta. Y espera un par de minutos más — a veces tarda.

**Las imágenes o el CSS no cargan**

Casi siempre es un problema de rutas. Revisa que usas rutas relativas como en el ejemplo de arriba. También ten cuidado con las mayúsculas: en GitHub `Foto.jpg` y `foto.jpg` son archivos distintos.

---

¿Algo no te funciona o tienes dudas? Abre un Issue en este repositorio y lo miramos.
