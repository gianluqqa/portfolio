
export const slideFromTop = {
    hidden: {
      opacity: 0,
      y: -50, // Posición inicial arriba
    },
    show: {
      opacity: 1,
      y: 0, // Llega a su posición final
      transition: {
        duration: 1.3,
        ease: 'easeOut',
      },
    },
  }
  
  export const slideFromRight = {
    hidden: {
      opacity: 0,
      x: 100, // empieza 100px a la derecha
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }
  
  export const slideFromBottom = {
    hidden: {
      opacity: 0,
      y: 50, // inicia 50px abajo
    },
    show: {
      opacity: 1,
      y: 0, // posición original
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  export const scaleUpOnView = {
    hidden: {
      opacity: 0,
      scale: 0.5, // Empieza más pequeño
    },
    show: {
      opacity: 1,
      scale: 1, // Se agranda a su tamaño original
      transition: {
        duration: 0.6, // Duración de la animación
        ease: 'easeOut', // Estilo de transición
      },
    },
  };
  

