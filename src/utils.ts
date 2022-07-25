export const createUId = () => (Math.random() * 100).toFixed();

export const debounce = (cb: any, ms: any) => {
  let timer: NodeJS.Timeout;

  return (val: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(val), ms);
  };
};
