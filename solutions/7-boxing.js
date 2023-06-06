const magic = (...args) => {
    let sum = args.reduce((prev, el) => prev + el, 0);
    const newMagic = (...args) => magic(sum, ...args);
    newMagic.valueOf = () => sum;
    return newMagic;
  };
  
  export default magic;
 