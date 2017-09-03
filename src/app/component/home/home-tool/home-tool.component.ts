import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../service/item.service';

@Component({
  selector: 'app-home-material',
  templateUrl: './home-tool.component.html',
  styleUrls: ['./home-tool.component.css']
})
export class HomeMaterialComponent implements OnInit {

  private itemsMaterial: any;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getAll().subscribe((data: any) => {
      this.itemsMaterial = data;
    });
  }

}