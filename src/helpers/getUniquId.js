const getIdArr = (itemsList)=> {
return  itemsList.map(item=> item.id)
 }
    


export const getUniqueId = (itemsList) => {
    let id = String(Math.floor(Math.random() * 200))
    while (getIdArr(itemsList).some(el=> el===id)) {
        id = String(Math.floor(Math.random() * 200))
    }
    return id
};
