
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
  