import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductFilterPipe } from "./product-filter.pipe";
import { FormsModule } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, ProductFilterPipe, FormsModule] // Buraya ekleyin
 // Buraya ekleyin
})
export class ProductComponent {
  constructor(private alertifyService:AlertifyService){ }
  title = "Ürün Listesi"
  filterText=""
  products : Product[] = [
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook", imageUrl:"https://laptopmedia.com/wp-content/uploads/2023/04/1-34-scaled.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://th.bing.com/th/id/OIP.ppjabA1fZz9mM5dXhGsDggHaHa?rs=1&pid=ImgDetMain"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook",imageUrl:"https://laptopmedia.com/wp-content/uploads/2023/04/1-34-scaled.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://th.bing.com/th/id/OIP.ppjabA1fZz9mM5dXhGsDggHaHa?rs=1&pid=ImgDetMain"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook",imageUrl:"https://laptopmedia.com/wp-content/uploads/2023/04/1-34-scaled.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://th.bing.com/th/id/OIP.ppjabA1fZz9mM5dXhGsDggHaHa?rs=1&pid=ImgDetMain"},
    {id:1, name:"Laptop", price:2500, categoryId:1, description:"Asus Notebook",imageUrl:"https://laptopmedia.com/wp-content/uploads/2023/04/1-34-scaled.jpg"},
    {id:2, name:"Mouse", price:25, categoryId:2, description:"A4 Tech",imageUrl:"https://th.bing.com/th/id/OIP.ppjabA1fZz9mM5dXhGsDggHaHa?rs=1&pid=ImgDetMain"}
  ]
    
  
addToCart(product: Product) {
  this.alertifyService.success(product.name+ " added")
}


}
