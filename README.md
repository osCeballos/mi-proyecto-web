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

## 🚀 Método para Proyectos Grandes o Complejos (Sin usar comandos)

Si tu página web tiene **muchas subpáginas, imágenes pesadas, carpetas o decenas de archivos**, intentar arrastrarlos directamente al navegador web de GitHub puede dar error, bloquearse o dejar carpetas vacías. El navegador no está diseñado para procesar tantos archivos de golpe.

¡No te preocupes! **No necesitas aprender a usar la terminal ni escribir comandos raros** en negro sobre blanco. Para solucionar esto de forma fácil, vamos a utilizar herramientas visuales. 

Aquí tienes las dos opciones más sencillas:

### Opción A: Usando GitHub Desktop (La forma más fácil y recomendada)

**GitHub Desktop** es una aplicación oficial gratuita que instalas en tu ordenador y te permite subir todo tu proyecto haciendo solo un par de clics.

#### Paso 1: Instalar y conectar tu cuenta
1. Descarga e instala **[GitHub Desktop](https://desktop.github.com/)** en tu ordenador (está disponible para Windows y Mac).
2. Abre el programa e inicia sesión con tu usuario y contraseña de GitHub (`Sign in to GitHub.com`).

#### Paso 2: Traer tu repositorio a tu ordenador (Clonar)

> 💡 **¿Qué significa "Clonar"?** 
> Piensa que el repositorio que has creado en la web de GitHub es una carpeta vacía en la nube. **"Clonar" es simplemente descargar una "carpeta espejo" o "carpeta inteligente"** a tu propio ordenador. Lo bueno de esta carpeta es que ya viene configurada y conectada con internet: todo lo que metas dentro se podrá subir a GitHub con un solo botón.

1. Dentro del programa, ve al menú superior y selecciona `File` (Archivo) > `Clone Repository...` (Clonar repositorio).

<img width="1914" height="1320" alt="Group 30" src="https://github.com/user-attachments/assets/66681301-4733-479c-8aa3-98e70934f221" />

3. Verás una lista con tus repositorios de GitHub. Selecciona el repositorio que creaste para tu página web.
4. Elige en qué carpeta de tu ordenador quieres guardarlo (abajo en *Local Path*) y haz clic en el botón azul **Clone**.

<img width="1914" height="1899" alt="Group 31" src="https://github.com/user-attachments/assets/f89bdaf7-67c6-45e6-a57e-3aac1040672d" />

6. ¡Listo! Ahora se habrá creado esa "carpeta inteligente" en tu ordenador.

#### Paso 3: Copiar tus archivos y subirlos
1. Abre esa nueva carpeta que se ha creado en tu ordenador.
2. **Copia y pega** dentro de ella todos los archivos de tu web (tu `index.html`, tus carpetas de imágenes, tus archivos CSS, etc.).
3. Vuelve a abrir la aplicación de **GitHub Desktop**. Verás que de forma mágica te detecta en la columna izquierda todos los archivos que acabas de meter.
4. Abajo a la izquierda verás un cuadro de texto que dice **Summary (required)**. Escribe un título rápido (por ejemplo: `Mi web completa`).
5. Haz clic en el botón azul de abajo que dice **Commit to main** (esto guarda los cambios de forma local).
6. Por último, haz clic en el botón de arriba del todo que dice **Push origin** (esto sube todos tus archivos a internet). ¡Y ya está!

<img width="1914" height="1308" alt="Group 32" src="https://github.com/user-attachments/assets/8667de18-0de1-474a-9faa-472920394256" />

---

### Opción B: Desde Visual Studio Code (Si ya lo usas para programar)

Si estás utilizando Visual Studio Code para escribir el código de tu página web, puedes subir tu proyecto gigante directamente desde ahí sin instalar nada más.

1. Abre la carpeta de tu página web en **Visual Studio Code**.
2. En la barra lateral izquierda, busca el icono de **Control de código fuente** (es el tercer o cuarto icono empezando por arriba, parece un diagrama con tres círculos conectados por líneas).
3. Si todavía no has subido este proyecto, verás un botón azul brillante que dice **Publish to GitHub** (Publicar en GitHub). Haz clic en él.
4. Si te lo pide, autoriza a Visual Studio Code a conectarse con tu cuenta de GitHub.
5. Selecciona la opción **Publish as GitHub public repository** (es muy importante que sea **Público** para que GitHub Pages pueda mostrar tu web gratis).
6. Deja que el programa trabaje unos segundos. Subirá absolutamente todas tus subpáginas e imágenes sin importar lo mucho que pesen.

---

### 🌐 El paso final: Activar GitHub Pages

Una vez que hayas usado la **Opción A** o la **Opción B**, todos tus archivos ya estarán a salvo en la web de GitHub. Ahora solo te queda activarlo para que se convierta en una web real:

1. Entra a tu repositorio desde la página web de GitHub.
2. Haz clic en la pestaña de **Settings** (Configuración) ⚙️ que verás en el menú de arriba.
3. En el menú de la izquierda, busca la sección **Pages**.
4. En el apartado *Build and deployment*, busca donde dice *Branch* (Rama). Cambia la opción de `None` a **`main`** (o `master`) y haz clic en **Save** (Guardar).
5. Espera un minuto, actualiza la página y en la parte superior de esa misma sección te aparecerá el enlace público (por ejemplo: `https://tu-usuario.github.io/tu-repositorio/`) para que cualquiera pueda ver tu trabajo. ¡A disfrutar de tu web!

---

¿Algo no te funciona o tienes dudas? Abre un Issue en este repositorio y lo miramos.

## Algo no funciona

**Sale error 404**

Comprueba que el archivo se llama `index.html` en minúsculas y que está en la raíz, no dentro de una carpeta. Y espera un par de minutos más — a veces tarda.

**Las imágenes o el CSS no cargan**

Casi siempre es un problema de rutas. Revisa que usas rutas relativas como en el ejemplo de arriba. También ten cuidado con las mayúsculas: en GitHub `Foto.jpg` y `foto.jpg` son archivos distintos.

---

¿Algo no te funciona o tienes dudas? Abre un Issue en este repositorio y lo miramos.
