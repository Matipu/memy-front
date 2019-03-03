import {Component, OnInit} from '@angular/core';
import {MemyBackConnectionService} from '../services/connection/memy-back-connection.service';
import {PicturesData} from '../services/connection/model/pictures/pictures';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.less']
})
export class PictureListComponent implements OnInit {

  private memyConnection: MemyBackConnectionService;
  picturesPage: PicturesData[];

  constructor(memyConnection: MemyBackConnectionService) {
    this.memyConnection = memyConnection;
  }

  ngOnInit() {
    this.memyConnection.getPictures(1)
      .subscribe(pictures => {
        this.picturesPage = pictures;
      });
  }
}
