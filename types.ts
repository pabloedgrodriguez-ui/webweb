export interface DemoFormData {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  interest: 'Demo 7 Días' | 'Pago Mensual' | 'Pago Anual' | 'ARISTASTUDIO ALUM (Premium)';
}

export interface ImageGenerationResponse {
  imageUrl?: string;
  error?: string;
}

export interface GenerateImageRequest {
  prompt: string;
}