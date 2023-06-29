import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor(){
        this._isAuth=false
        this._user={}
        this._id=0
        this.role="ADMIN"
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth=bool
    }
    setUser(user){
        this._user=user
    }
    getIsAuth(){
        return this._isAuth
    }
    getUser(){
        return this._user
    }
    setId(id){
        this._id=id
    }
    getId(){
        return this._id
    }
    setRole(role){
        this.role=role
    }
}