import { defineStore } from 'pinia'
export const  useStoreVerbs = defineStore('storeId', {
 
    state: () => {
      return {      
       workTime: 0,
      }
    },
    getters:{
  
    },
    actions:{
     increment(){
        this.workTime++;
     }
    }
  })
  
  