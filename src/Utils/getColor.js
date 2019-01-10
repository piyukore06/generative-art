export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 6); 
  return ['#D34750', '#FBBB41', '#8B9965', '#39A3A2', '#F1FBEF', 'transparent'][randomColor];
}
