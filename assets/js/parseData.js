const parseData = (objName) => {
  if (!localStorage.getItem(`${objName}`)) return;
  return JSON.parse(localStorage.getItem(`${objName}`));
};


