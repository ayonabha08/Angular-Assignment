import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/Models/fruit';
import { FruitService } from 'src/app/Services/fruit.service';

@Component({
  selector: 'app-fruit-mgr',
  templateUrl: './fruit-mgr.component.html',
  styleUrls: ['./fruit-mgr.component.css']
})
export class FruitMgrComponent implements OnInit {

  itemId:any;
  fruitList: Fruit[]=[];
  selected: Fruit={} as Fruit;

  constructor(private frService: FruitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllFruit();
    
  }

  getAllFruit() {
    this.frService.getAllFruit().subscribe((fr: Fruit[])=>{
      this.fruitList=fr;
    })
  }

  public deleteFruit(id:number)
  {

        this.frService.deleteFruit(id).subscribe((data)=>{
            alert("Deleted");
        })
  }
}
