import { Component, OnInit } from '@angular/core';
import { TestsuiteService } from '../../services/testsuite.service';
import { TreeNode } from 'primeng/api';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  tests: TreeNode[];

  constructor(private testService: TestsuiteService) {}

  ngOnInit(): void {
    this.loadTreeTable();
  }
  loadTreeTable() {
    this.testService.getTests().then((tests: any) => {
      this.tests = tests;
      this.data = {
        labels: ['Passed', 'Failed'],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ['#089724', '#FF6384'],
            hoverBackgroundColor: ['#089724', '#FF6384'],
          },
        ],
      };
      this.options = {
        plugins: {
          labels: {
            // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'

            render: function (args) {
              return args.percentage + '%' + ' (' + args.value + ')';
            },
            fontColor: '#fff',
            fontSize: 16,
          },
        },
      };

      console.log(this.options);
    });
  }
}
