const getIdArr = (itemsList) => {
  return itemsList.map((item) => item.id);
};

export const getUniqueId = (itemsList) => {
  let id = String(Math.floor(Math.random() * 200));
  const idArray = getIdArr(itemsList);

  if (idArray.some((el) => el === id)) {
    getUniqueId(itemsList);
  } else {
    return id;
  }
};
