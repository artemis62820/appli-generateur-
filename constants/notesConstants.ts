import { Dimensions } from 'react-native';
// Dimensions : permet de récupérer les dimensions de la fenêtre
export const { width: screenWidthModal, height: screenHeightModal } = Dimensions.get('window');


export const NOTE_CATEGORIES = [
  'personnel',
  'travail', 
  'études',
  'santé',
  'finances',
  'loisirs',
  'autre'
] as const;
// as const : pour que les valeurs soient immuables et ne puissent pas être modifiées

export const NOTE_COLORS = [
  '#FF6B6B', 
  '#4ECDC4', 
  '#45B7D1', 
  '#96CEB4', 
  '#FFEAA7', 
  '#DDA0DD', 
  '#FFB347',
  '#F8F9FA', 
] as const;
// as const : pour que les valeurs soient immuables et ne puissent pas être modifiées