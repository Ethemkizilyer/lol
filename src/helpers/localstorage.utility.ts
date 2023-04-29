export const setLocalStorage=(key:string,value:any)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
export const getLocalStorage = (key: string): void | any=> {
  localStorage.getItem(key);
};