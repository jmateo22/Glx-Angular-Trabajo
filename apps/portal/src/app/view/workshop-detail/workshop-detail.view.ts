import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workshop } from '../../commons/interfaces/workshop.interface';
import { WorkshopHttpService } from '../../commons/services/workshop-http.service';

@Component({
  templateUrl: './workshop-detail.view.html',
  styleUrls: ['./workshop-detail.view.css']
})
export class WorkshopDetailView implements OnInit {

  workshop: Workshop;

  constructor(private workshopHtpp: WorkshopHttpService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('idTaller');

    this.workshopHtpp.getOne(id).subscribe(
      workshop => this.workshop = workshop,
    );
  }

}
