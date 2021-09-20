export const getContent = (id, list) => {
   const matching = list.find((el) => el.id === id );
   return matching.content
  };
