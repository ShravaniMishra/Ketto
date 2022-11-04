 

export const loadData=(key)=>{
    try {
      let curr= JSON.parse (localStorage.getItem(key))
      return curr
    } catch (error) {
      return undefined
    }
     
  
  }
  
  export const saveData=(value)=>{
      localStorage.setItem("key",JSON.stringify(value))
  }