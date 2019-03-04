import { Component, OnInit } from '@angular/core';
import { TagData } from '../services/connection/model/tags/tags';
import { MemyBackConnectionService } from "../services/connection/memy-back-connection.service"

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.less']
})
export class TagsListComponent implements OnInit {

  private memyConnection: MemyBackConnectionService;
  tags: TagData[];

  constructor(memyConnection: MemyBackConnectionService) {
    this.memyConnection = memyConnection;
  }

  ngOnInit() {
    this.memyConnection.getTags()
    .subscribe(tags => {
      this.tags = tags;
    });
  }

}
