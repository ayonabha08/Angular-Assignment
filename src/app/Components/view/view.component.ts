import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/Models/fruit';
import { FruitService } from 'src/app/Services/fruit.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  itemId:any;
  selected: Fruit={} as Fruit;

  constructor(private fruitService:FruitService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //Get the parameters from the url using paramMap function of the activatedRoute
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.itemId=map.get("id");//Get the value of the key called id
      if(this.itemId!=null){
        this.fruitService.getFruit(parseInt(this.itemId)).subscribe((data)=>{
          this.selected=data as Fruit;
        })
      }
    })
  }

}