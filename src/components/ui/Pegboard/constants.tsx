import {
  PhotoBlue,
  PhotoGreen,
  PhotoOrange,
  PhotoPink,
  PhotoTeal,
  PhotoYellow,
  UniqueBlue,
  UniqueGreen,
  UniqueOrange,
  UniquePink,
  UniqueTeal,
  UniqueYellow
} from './components';

export const ROLES = [
  'Software Engineering',
  'Visual Design',
  'Project Management',
  'UX Research',
  'Product Marketing',
  'UX Design'
] as const;

// eslint-disable-next-line react-refresh/only-export-components
export const ROLE_COLORS = {
  'Software Engineering': {
    text: '#49A0EB',
    pegboard: '#DCEEFF',
    photo: PhotoBlue,
    unique: UniqueBlue
  },
  'Visual Design': { text: '#F95984', pegboard: '#FEE8EB', photo: PhotoPink, unique: UniquePink },
  'Project Management': {
    text: '#10B9DF',
    pegboard: '#E2F5F9',
    photo: PhotoTeal,
    unique: UniqueTeal
  },
  'UX Research': { text: '#F1A210', pegboard: '#FFF2DC', photo: PhotoYellow, unique: UniqueYellow },
  'Product Marketing': {
    text: '#8BB660',
    pegboard: '#E7F3DD',
    photo: PhotoGreen,
    unique: UniqueGreen
  },
  'UX Design': { text: '#FF8B39', pegboard: '#FFE8DC', photo: PhotoOrange, unique: UniqueOrange }
};
