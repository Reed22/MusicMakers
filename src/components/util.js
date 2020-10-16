export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development';
};

export { isDevelopment as default };
