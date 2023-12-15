import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4} from 'uuid'
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://localhost:3000/items-to-buy';

  public getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }

  public addItem(item : Item){
    item.id = uuidv4();
    return this.http.post<Item[]>(this.url, item);
  }

  public updateItem(item:Item){
    return this.http.put<Item>(`${this.url}/${item.id}`, item);
  }

  public deleteItem(id : number){
    return this.http.delete(`${this.url}/${id}`);
  }

  constructor(private http : HttpClient) { }
}
