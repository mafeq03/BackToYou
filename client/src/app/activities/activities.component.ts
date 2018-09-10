import { EntryService } from './../services/entry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities:any=[];
  constructor(private activity:EntryService) { }

  ngOnInit() {
  }

}
