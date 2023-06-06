const apply = (obj, func) => {
    func.call(obj);
  };
  
  export default (items, cb) => {
    items.forEach(item => apply(item, cb));
  };
