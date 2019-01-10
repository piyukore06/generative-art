export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 7); 
  return ['#D34750', '#EC9302', '#8B9965', '#39A3A2', '#7C2952', 'white', 'transparent'][randomColor];
}
