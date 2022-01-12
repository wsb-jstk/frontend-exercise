export const isOperator = (val) => "%/*-+.".indexOf(val) !== -1;
export const trimEquaction = (val) =>
  isOperator(val[val.length - 1]) ? val.slice(0, -1) : val;
