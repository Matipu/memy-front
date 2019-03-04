import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TagData } from '../services/connection/model/tags/tags';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnChanges {

  @Input()
  tag: TagData;

  color: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.tag.currentValue.name.length % 5)
    switch ((changes.tag.currentValue.name.length % 5)) {
      case 0:
        this.color = 'MediumSeaGreen';
        break;
      case 1:
        this.color = 'DarkRed';
        break;
      case 2:
        this.color = 'DarkCyan';
        break;
      case 3: 
        this.color = 'Teal';
        break;
      case 4: 
        this.color = 'Purple';
        break;
    }
  }
}
