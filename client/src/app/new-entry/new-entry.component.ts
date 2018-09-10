import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `/entries/`
  });

  newEntry = {
    date: '',
    dailyRecord: {
    emotion: '',
    activities: [],
    comment:''
        }
    
  }

  constructor(private session:SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
    .subscribe(
      (user) => console.log("LOGG = ", user)
    );
}

addActivity(activity) {
  this.newEntry.dailyRecord.activities.push(activity);
}

submit() {
  this.uploader.onBuildItemForm = (item, form) => {
    form.append('date', this.newEntry.date);
    form.append('emotion', this.newEntry.dailyRecord.emotion);
    form.append('activities', JSON.stringify(this.newEntry.dailyRecord.activities));
    form.append('comment', this.newEntry.dailyRecord.comment);
  };
  this.uploader.uploadAll();
}

isFormClean(): boolean {
  console.log('date == emotion: ', this.newEntry.date === '' || this.newEntry.dailyRecord.emotion === '')

  if (this.newEntry.date === '' || this.newEntry.dailyRecord.emotion === '') {
    return window.confirm(`
        Unsaved changes.
        Are you sure you want to quit?
    `);
  }

  return true;
}


}
