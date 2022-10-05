import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from 'src/app/Models/fruit';
import { FruitService } from 'src/app/Services/fruit.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  @Output() emitter : EventEmitter<Fruit> = new EventEmitter<Fruit>();
  newFru : Fruit = {} as Fruit; 
  url : any;
  router: any;

  constructor(private frService : FruitService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  
  onChange(event : any): void{
    if(event.target.files && event.target.files.length){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_ev)=>{
        this.url = reader.result;
      }
    }else{
      alert("No file has been selected");
    }
  }

  
    addNewFruit(){   

        this.frService.addFruit(this.newFru).subscribe((data) =>{

        this.router.navigate(["/Fruit/All/"]);

        
  
      }
    
      )};

}
