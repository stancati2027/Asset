export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedTime: number;
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceId: string;
  appointmentDate: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
}

export interface CarPart {
  id: string;
  name: string;
  basePrice: number;
}