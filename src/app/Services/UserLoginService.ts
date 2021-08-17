import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IPerson } from '../Contracts/IUserLogin';
const API_URL = 'https://tekdi-challenges.appspot.com/api/People';
@Injectable()
export class UserLoginService{

    constructor(private http:HttpClient) {
       

    }
     
    getAllPerson(){
        return this.http.get<any[]>(API_URL, { observe: 'response' })
    }
    Addpesron(pesron:IPerson){
        return this.http.post(API_URL,pesron).toPromise();
    }
    Edit(pesron:IPerson,Id:number){
        return this.http.put(API_URL+'/'+Id,pesron).toPromise();
    }
}