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

    if (this.config.data.params == 'params-success') {
      urltoBeCalled = 'assets/resultsSuccess.json';
    } else if (this.config.data.params == 'params-failed') {
      urltoBeCalled = 'assets/resultsFailed.json';
    } else if (this.config.data.params == 'params-all') {
      urltoBeCalled = 'assets/resultsSuccessAndFailed.json';
    }

    this.testsuiteService.getResults(urltoBeCalled).then((res) => {
      this.results = res;
      console.log(res);
    });
  }
}
