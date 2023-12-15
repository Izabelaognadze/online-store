import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../shared/services/item.service';
import { Item } from '../../shared/models/item'
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'org-navigation-menu',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css',
})
export class NavigationMenuComponent implements OnInit{
  public items : Item[] = []

  createForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    seller: new FormControl('', Validators.required),
    imgURL: new FormControl('', Validators.required),
  });

  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    seller: new FormControl('', Validators.required),
    imgURL: new FormControl('', Validators.required),
  });

  addItem() {
    this.itemService.addItem({
      id:this.createForm.value.id!,
      name: this.createForm.value.name!, 
      price : this.createForm.value.price!,
      category : this.createForm.value.category!,
      seller : this.createForm.value.seller!,
      imgURL : this.createForm.value.imgURL!,
    }).subscribe(() =>{
      this.loadItems
    })
  }

  loadItems(){
    this.itemService.getItems().subscribe(d => {
      this.items = d
    });
  }
  
  constructor(private itemService : ItemService) { }

  ngOnInit(): void {
    this.loadItems()
  }
}
