const storage = {
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || {}
    },
    save(key,value){
        return localStorage.setItem(key,JSON.stringify(value))
    },
    remove(key){
        return localStorage.removeItem(key)
    },
    clear(){
        return localStorage.clear()
    }
}

export default storage