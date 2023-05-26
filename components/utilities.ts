import { formatRelative } from 'date-fns';

export const screenWidthbreakpoints = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};

export const getTimeDifference = (createdDatetime: string) => {
  const d1 = new Date(createdDatetime);
  const d2 = new Date();

  return formatRelative(d1, d2);
};
