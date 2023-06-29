import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor(){
        this.types=[]
        this.brands=[]
        this.products=[]
        this.basket=[]
        this.selectedType={}
        this.selectedBrand={}
        this.page=1
        this.totalCount=0
        this.limit=9
        this.help=[]
        this.currentBasket=[]
        this.price=500000
        makeAutoObservable(this)//делаем объект наблюдаемым
    }
    setCurrentBasket(currentBasket){
        this.currentBasket=currentBasket
    }
    setTypes(types){
        this.types=types
    }
    setBrands(brands){
        this.brands=brands
    }
    setProducts(products){
        this.products=products
    }

    setSelectedType(type){
       this.selectedType=type
    }
    setSelectedBrand(brand){
        this.selectedBrand=brand
    }
    getTypes(){
        return this.types
    }
    getBrands(){
        return this.brands
    }
    getProducts(){
        return this.products
    }
    getSelectedType(){
        this.setPage(1)
        return this.selectedType
    }
    getSelectedBrand(){
        this.setPage(1)
        return this.selectedBrand
    }
    setPage(page){
        this.page=page
    }
    setTotalCount(totalCount){
        this.totalCount=totalCount
    }
    setPrice(price){
        this.price=price
    }
}