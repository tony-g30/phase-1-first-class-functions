
const receivesAFunction = (func) => {
  return func();
};

const returnsANamedFunction = () => {
  const namedFunction = () => {
    return "reject finance bill!";
  };

  return namedFunction;
};

const returnsAnAnonymousFunction = () => {
  return () => "Ruto must go!";
};
