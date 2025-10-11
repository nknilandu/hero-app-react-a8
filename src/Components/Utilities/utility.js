export const getItemData = (key) => {
    const keyValue = localStorage.getItem(key)

    if(keyValue) {
        return JSON.parse(keyValue)
    } else {
        return [];
    }
} 



export const setItemData = (key, value) => {
    const arr = getItemData(key)

    if(!arr.includes(value)) {
        arr.push(value)
        localStorage.setItem(key, JSON.stringify(arr))
    }
}




export const checkItemData = (id, key) => {
    const arr = getItemData(key);
    
    return arr.includes(String(id)) ?  true :  false
};

