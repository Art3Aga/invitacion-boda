
export type EstadoInvitacion = 'pendiente' | 'confirmado' | 'rechazado';

export interface Invitado {
  id: string;              
  created_at?: string;     
  nombre_visible: string;  
  slug: string;            
  pases_totales: number;   
  confirmados: number;     
  estado: EstadoInvitacion;
}