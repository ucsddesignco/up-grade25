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

// eslint-disable-next-line react-refresh/only-export-components
export const STICKY_TEXT = [
  {
    title: 'Project Management',
    body: '"it was a good \n opportunity to learn how \n to collaborate with\n different roles and\n teammates with various\n skill backgrounds"',
    bodyFontSize: '16px'
  },
  {
    title: 'UX Design',
    body: '“...it really gave me a \nrealistic taste of what \nbeing a designer is truly \nlike... I now know what \nto do in the future”',
    bodyFontSize: '16px'
  },
  {
    title: 'Visual Design',
    body: '“this was my first real \ndesign project that I’ve \nworked on and it was \nsuch a memorable\n experience.”',
    bodyFontSize: '16px'
  },
  {
    title: 'UX Research',
    body: '“My favorite part of the \nprogram was the \ncollaborative work with \nother team members for\n the project in addition to\n the hands on\n experience.”',
    bodyFontSize: '16px'
  },
  {
    title: 'Product Marketing',
    body: '“I had a pretty pleasant\n experience overall. I\n gained some valuable\n experience in team work\n and marketing.”',
    bodyFontSize: '16px'
  },
  {
    title: 'Software Engineering',
    body: '“I really liked the\n flexibility we were given\n and the aspect of having\n mentors because they\n were incredibly helpful\n whenever we needed\n feedback or advice.”',
    bodyFontSize: '16px'
  }
];
