import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TestsuiteService } from '../../services/testsuite.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results: [];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private testsuiteService: TestsuiteService
  ) {}

  ngOnInit(): void {
    var urltoBeCalled = '';
    this.results = null;
    console.log(this.config.data.parent);
    console.log(this.config.data.rowData);
    console.log(this.config.data.type);

    if (this.config.data.type == 'success') {
      urltoBeCalled = 'assets/resultsSuccess.json';
    } else if (this.config.data.type == 'failed') {
      urltoBeCalled = 'assets/resultsFailed.json';
    } else if (this.config.data.type == 'all') {
      urltoBeCalled = 'assets/resultsSuccessAndFailed.json';
    }

    this.testsuiteService.getResults(urltoBeCalled).then((res) => {
      this.results = res;
    });
  }
}
