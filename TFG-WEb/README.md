# Marcador Deportivo para Móvil

Una aplicación web diseñada específicamente para funcionar como marcador deportivo en dispositivos móviles, optimizada para dos jugadores sentados frente a frente.

## Características

- **Diseño responsive** optimizado para móviles
- **Pantalla completa** automática
- **Rotación 180°** para el jugador 2 (sentado en frente)
- **Contadores de dos dígitos** (00-99)
- **Nombres editables** para ambos jugadores
- **Imágenes personalizables** en los laterales
- **Múltiples contadores laterales** para diferentes métricas

## Estructura de la Pantalla

La pantalla se divide horizontalmente en 3 secciones:

### Sección Superior (Jugador 1)
- **Izquierda**: Imagen personalizable + 2 contadores
- **Centro**: Nombre editable + contador principal
- **Derecha**: Imagen personalizable + 2 contadores

### Sección Central (Controles)
- Botón **RESET**: Reinicia todos los contadores
- Botón **↕**: Intercambia puntuaciones entre jugadores

### Sección Inferior (Jugador 2)
- Mismo diseño que la sección superior pero **rotado 180°**
- Perfecto para jugadores sentados frente a frente

## Cómo Usar

### Contadores Principales (Centro)
- **Click simple**: +1 punto
- **Doble click**: -1 punto

### Contadores Laterales
- **Click simple**: +1
- **Doble click**: -1

### Nombres de Jugadores
- Click en el nombre para editarlo
- Máximo 15 caracteres

### Imágenes Laterales
- Click en cualquier imagen para cambiarla
- Acepta archivos de imagen (JPG, PNG, etc.)

### Controles
- **RESET**: Confirma antes de resetear todos los contadores
- **↕**: Intercambia puntuaciones y nombres entre jugadores

## Instalación

1. Descarga todos los archivos (index.html, styles.css, script.js)
2. Descarga la carpeta `img` con las imágenes por defecto
3. Abre `index.html` en el navegador de tu móvil
4. Agrega a pantalla de inicio para mejor experiencia
5. Rota el dispositivo a horizontal si es necesario

## Personalización de Imágenes

### Imágenes por defecto:
- Coloca tus imágenes en la carpeta `img/`
- Renómbralas como: `default1.png`, `default2.png`, `default3.png`, `default4.png`
- Tamaño recomendado: 150x200 píxeles (vertical)

### Durante el juego:
- Click en cualquier imagen para cambiarla temporalmente
- Selecciona desde la galería de tu dispositivo

## Características Técnicas

- **Responsive Design**: Se adapta a diferentes tamaños de pantalla
- **Touch Optimized**: Gestos táctiles optimizados para móvil
- **No Zoom**: Previene zoom accidental
- **Fullscreen**: Entrada automática en pantalla completa
- **Offline**: Funciona sin conexión a internet

## Navegadores Compatibles

- Chrome (móvil)
- Safari (iOS)
- Firefox (móvil)
- Edge (móvil)

## Personalización

### Colores
Edita `styles.css` para cambiar:
- Colores de fondo
- Colores de botones
- Gradientes

### Funcionalidad
Edita `script.js` para:
- Cambiar límites de contadores
- Añadir nuevas funciones
- Modificar comportamientos

---

¡Perfecto para deportes como ping-pong, tenis de mesa, badminton, o cualquier juego entre dos personas!