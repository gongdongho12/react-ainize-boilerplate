const range = (x: number, y: number) => Array.from((function *() {
  while (x <= y) yield x++;
})());

export default range