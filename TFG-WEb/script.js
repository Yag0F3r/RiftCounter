// Variables globales para los contadores
let player1Score = 0;
let player2Score = 0;
let topLeftCounter = 0;
let topRightCounter = 0;
let bottomLeftCounter = 0;
let bottomRightCounter = 0;

// Función para formatear números a dos dígitos
function formatNumber(num) {
    return num.toString().padStart(2, '0');
}

// Función para actualizar un contador
function updateCounter(elementId, value) {
    const element = document.getElementById(elementId);
    element.textContent = formatNumber(value);
    element.classList.add('score-animation');
    setTimeout(() => {
        element.classList.remove('score-animation');
    }, 300);
}

// Funciones para incrementar/decrementar contadores principales
function changeMainScore(player, increment = true) {
    if (player === 1) {
        if (increment && player1Score < 99) {
            player1Score++;
        } else if (!increment && player1Score > 0) {
            player1Score--;
        }
        updateCounter('player1Score', player1Score);
    } else if (player === 2) {
        if (increment && player2Score < 99) {
            player2Score++;
        } else if (!increment && player2Score > 0) {
            player2Score--;
        }
        updateCounter('player2Score', player2Score);
    }
}



// Función para resetear todos los contadores
function resetAll() {
    if (confirm('¿Estás seguro de que quieres resetear todos los contadores?')) {
        player1Score = 0;
        player2Score = 0;
        topLeftCounter = 0;
        topRightCounter = 0;
        bottomLeftCounter = 0;
        bottomRightCounter = 0;
        
        // Actualizar todos los contadores en pantalla
        updateCounter('player1Score', player1Score);
        updateCounter('player2Score', player2Score);
        updateCounter('topLeftCounter', topLeftCounter);
        updateCounter('topRightCounter', topRightCounter);
        updateCounter('bottomLeftCounter', bottomLeftCounter);
        updateCounter('bottomRightCounter', bottomRightCounter);
    }
}

// Función para intercambiar puntuaciones
function swapScores() {
    const tempScore = player1Score;
    const tempName = document.getElementById('player1Name').value;
    
    player1Score = player2Score;
    player2Score = tempScore;
    
    document.getElementById('player1Name').value = document.getElementById('player2Name').value;
    document.getElementById('player2Name').value = tempName;
    
    updateCounter('player1Score', player1Score);
    updateCounter('player2Score', player2Score);
}

// Funciones para contadores de esquina
function changeCornerCounter(cornerName, increment = true) {
    let counterValue;
    
    switch(cornerName) {
        case 'topLeft':
            if (increment && topLeftCounter < 99) topLeftCounter++;
            else if (!increment && topLeftCounter > 0) topLeftCounter--;
            counterValue = topLeftCounter;
            updateCounter('topLeftCounter', counterValue);
            break;
        case 'topRight':
            if (increment && topRightCounter < 99) topRightCounter++;
            else if (!increment && topRightCounter > 0) topRightCounter--;
            counterValue = topRightCounter;
            updateCounter('topRightCounter', counterValue);
            break;
        case 'bottomLeft':
            if (increment && bottomLeftCounter < 99) bottomLeftCounter++;
            else if (!increment && bottomLeftCounter > 0) bottomLeftCounter--;
            counterValue = bottomLeftCounter;
            updateCounter('bottomLeftCounter', counterValue);
            break;
        case 'bottomRight':
            if (increment && bottomRightCounter < 99) bottomRightCounter++;
            else if (!increment && bottomRightCounter > 0) bottomRightCounter--;
            counterValue = bottomRightCounter;
            updateCounter('bottomRightCounter', counterValue);
            break;
    }
}

// Lista de imágenes disponibles en la carpeta img
const availableImages = [
    'img/arena1.jpg',
    'img/arena2.jpg', 
    'img/arena3.jpg',
    'img/arena4.jpg',
    'img/battlefield1.jpg',
    'img/battlefield2.jpg',
    'img/stadium1.jpg',
    'img/stadium2.jpg',
    'img/court1.jpg',
    'img/court2.jpg',
    'img/default1.png',
    'img/default2.png',
    'img/default3.png',
    'img/default4.png'
];

let currentSelector = null;

// Función para abrir la galería de imágenes
function openImageGallery(selectorId) {
    currentSelector = selectorId;
    const modal = document.getElementById('imageGalleryModal');
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Limpiar galería
    galleryGrid.innerHTML = '';
    
    // Añadir imágenes disponibles
    availableImages.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = () => selectImage(imagePath);
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.onerror = function() {
            // Si la imagen no existe, crear un placeholder
            this.style.display = 'none';
            galleryItem.innerHTML = `
                <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #95a5a6, #7f8c8d); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.7rem; text-align: center;">
                    IMG ${index + 1}
                </div>
            `;
        };
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
    
    modal.style.display = 'flex';
}

// Función para cerrar la galería
function closeImageGallery() {
    document.getElementById('imageGalleryModal').style.display = 'none';
    currentSelector = null;
}

// Función para seleccionar una imagen
function selectImage(imagePath) {
    if (!currentSelector) return;
    
    const selector = document.getElementById(currentSelector);
    const placeholder = selector.querySelector('.image-placeholder');
    const selectedImage = selector.querySelector('.selected-image');
    
    selectedImage.src = imagePath;
    selectedImage.style.display = 'block';
    placeholder.style.display = 'none';
    
    closeImageGallery();
}

// Función para subir imagen personalizada
function uploadCustomImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                selectImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Función para quitar imagen seleccionada
function removeSelectedImage() {
    if (!currentSelector) return;
    
    const selector = document.getElementById(currentSelector);
    const placeholder = selector.querySelector('.image-placeholder');
    const selectedImage = selector.querySelector('.selected-image');
    
    selectedImage.style.display = 'none';
    placeholder.style.display = 'flex';
    
    closeImageGallery();
}

// Event listeners cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Contadores principales - click para incrementar, doble click para decrementar
    document.getElementById('player1Score').addEventListener('click', () => changeMainScore(1, true));
    document.getElementById('player1Score').addEventListener('dblclick', () => changeMainScore(1, false));
    document.getElementById('player2Score').addEventListener('click', () => changeMainScore(2, true));
    document.getElementById('player2Score').addEventListener('dblclick', () => changeMainScore(2, false));
    

    
    // Contadores de esquina - click para incrementar, doble click para decrementar
    document.getElementById('topLeftCounter').addEventListener('click', () => changeCornerCounter('topLeft', true));
    document.getElementById('topLeftCounter').addEventListener('dblclick', () => changeCornerCounter('topLeft', false));
    document.getElementById('topRightCounter').addEventListener('click', () => changeCornerCounter('topRight', true));
    document.getElementById('topRightCounter').addEventListener('dblclick', () => changeCornerCounter('topRight', false));
    document.getElementById('bottomLeftCounter').addEventListener('click', () => changeCornerCounter('bottomLeft', true));
    document.getElementById('bottomLeftCounter').addEventListener('dblclick', () => changeCornerCounter('bottomLeft', false));
    document.getElementById('bottomRightCounter').addEventListener('click', () => changeCornerCounter('bottomRight', true));
    document.getElementById('bottomRightCounter').addEventListener('dblclick', () => changeCornerCounter('bottomRight', false));
    
    // Event listeners para cerrar modal al hacer click fuera
    document.getElementById('imageGalleryModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeImageGallery();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageGallery();
        }
    });
    
    // Prevenir zoom en móviles al hacer doble click
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Prevenir scroll y zoom
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, { passive: false });
    
    // Forzar pantalla completa en móviles
    if (window.DeviceMotionEvent) {
        setTimeout(() => {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }, 1000);
    }
    
    // Inicializar todos los contadores
    updateCounter('player1Score', player1Score);
    updateCounter('player2Score', player2Score);
    updateCounter('topLeftCounter', topLeftCounter);
    updateCounter('topRightCounter', topRightCounter);
    updateCounter('bottomLeftCounter', bottomLeftCounter);
    updateCounter('bottomRightCounter', bottomRightCounter);
});

// Función para manejar orientación de pantalla
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Prevenir selección de texto
document.onselectstart = function() {
    return false;
};

document.onmousedown = function() {
    return false;
};