import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PicturesData} from '../services/connection/model/pictures/pictures';
import {MemyBackConnectionService} from '../services/connection/memy-back-connection.service';
import {AppSettings} from '../services/connection/AppSettings';

@Component({
  selector: 'app-picture-element',
  templateUrl: './picture-element.component.html',
  styleUrls: ['./picture-element.component.less']
})
export class PictureElementComponent implements OnChanges {

  @Input()
  pictureData: PicturesData;

  picturePath: string;

  private memyConnection: MemyBackConnectionService;

  constructor(memyConnection: MemyBackConnectionService) {
    this.memyConnection = memyConnection;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.picturePath = AppSettings.API_ENDPOINT + 'picture?fileTag=' + changes.pictureData.currentValue.path;
  }

}
