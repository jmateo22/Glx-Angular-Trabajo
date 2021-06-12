import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { Workshop } from '../../commons/interfaces/workshop.interface';
import { WorkshopHttpService } from '../../commons/services/workshop-http.service';

@Component({
  templateUrl: './workshop-list.view.html',
  styleUrls: ['./workshop-list.view.css']
})
export class WorkshopListView implements OnInit {

  workshops: Workshop[] = [];
  constructor(private workshopHttp: WorkshopHttpService) { }

  ngOnInit(): void {

    this.workshopHttp.getAll().subscribe(
      workshops => this.workshops = workshops,
    );
  }
}
