module.exports = function check(str, bracketsConfig) {
  return (
    str.split('').reduce((acc, cur) => {
      Object.fromEntries(bracketsConfig)[acc.at(-1)] === cur
        ? acc.pop()
        : acc.push(cur);
      return acc;
    }, []).length === 0
  );
}



