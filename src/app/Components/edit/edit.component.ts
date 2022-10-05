import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fruit } from 'src/app/Models/fruit';
import { FruitService } from 'src/app/Services/fruit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  foundFruit: Fruit={} as Fruit;
  itemId:any;
  constructor(private frService: FruitService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.itemId=map.get("id");
      this.frService.getFruit(parseInt(this.itemId)).subscribe((data: Fruit)=>{
        this.foundFruit=data;
      })
    })
  }

  onSubmit(): void{
    this.frService.updateFruit(this.foundFruit).subscribe((data)=>{
      alert(data);
    })
  }
}