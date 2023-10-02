export function getMetadata() {
  if (typeof window === 'undefined') {
    // Estamos en el servidor, devuelve un valor predeterminado o calcula el valor en función de las necesidades del servidor
    return {
      title: {
        template:
          '%s | Profecias de los ultimos tiempos segun apariciones de la Virgen Maria y revelaciones privadas',
        default:
          'Profecias de los ultimos tiempos segun apariciones de la Virgen Maria y revelaciones privadas',
      },
    };
  } else {
    // Estamos en el cliente, devuelve el valor que deseas para el cliente
    return {
      title: {
        template:
          '%s | Profecias de los ultimos tiempos segun apariciones de la Virgen Maria y revelaciones privadas',
        default:
          'Profecias de los ultimos tiempos segun apariciones de la Virgen Maria y revelaciones privadas',
      },
    };
  }
}