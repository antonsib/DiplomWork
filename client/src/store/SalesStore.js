import {makeAutoObservable} from "mobx";

export default class SalesStore{
    constructor(){
        this.sale=[]
        this.users=[]
        makeAutoObservable(this)
    }
    setSales(sales){
        this.sale=sales
    }
    setUsers(users){
        this.users=users
    }
}