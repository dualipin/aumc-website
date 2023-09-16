//Definición de la interfaz Link
interface Link {
  label: string;
  path: string;
  icon?: string;
}


//Links de la barra de navegación
export const Links: Link[] = [
  { label: 'Inicio', path: '' },
  { label: 'Servicios', path: 'servicios' },
  { label: 'Contacto', path: 'contacto' },
  { label: 'Nosotros', path: 'nosotros' },
];
