type choreType = {
    title:string,
    desc: string
}

export default class Chores{
    private _listChores: choreType[] = [] 


    update(id:number, chore: choreType){
        this._listChores[id] = chore
    }

    delete(id:number){
        this._listChores.slice(id,1)
    }
    list(filter?: string):choreType[]{
        if(!filter){
            return this._listChores
        }
        const listFiltered = this._listChores.filter((chore)=>{
            return chore.title.toLowerCase().includes(filter.toLowerCase())
        })
        return listFiltered
    }
    create(chore: choreType | choreType[]){
        if(Array.isArray(chore)){
            chore.forEach((element)=>{
                this._listChores.push(element)
            })
        }else{
            this._listChores.push(chore)
        }
    }
  
}

