import { Component, OnInit } from '@angular/core';
import { TestsuiteService } from '../../../services/testsuite.service';
import { TreeNode } from 'primeng/api';
import 'chartjs-plugin-labels';
import { DialogService } from 'primeng/dynamicdialog';
import { ResultsComponent } from '../../results/results.component';

@Component({
  selector: 'app-graph-by-enviroment',
  templateUrl: './graph-by-enviroment.component.html',
  styleUrls: ['./graph-by-enviroment.component.scss'],
  providers: [DialogService],
})
export class GraphByEnviromentComponent implements OnInit {
  data: any = [];
  options: any = [];
  tests: TreeNode[];

  constructor(
    private testService: TestsuiteService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.loadTreeTable();
  }

  // Loading Tree Table
  loadTreeTable() {
    this.testService.getByEnviroment().then((tests: any) => {
      this.tests = tests;
      this.tests.forEach((test) => {
        this.data.push({
          labels: ['Passed', 'Failed'],
          datasets: [
            {
              data: [test.data.passed, test.data.failed],
              backgroundColor: ['#089724', '#e50637'],
              hoverBackgroundColor: ['#089724', '#e50637'],
            },
          ],
        });

        this.options.push({
          plugins: {
            labels: {
              render: function (args) {
                return args.percentage + '%' + ' (' + args.value + ')';
              },
              fontColor: '#fff',
              fontSize: 12,
            },
          },
          title: {
            display: true,
            text: test.data.name,
            fontSize: 18,
          },
          animation: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true,
            },
          },
        });
      });
    });
  }

  showNewPopup(parent = '', rowData, type) {
    const ref = this.dialogService.open(ResultsComponent, {
      data: {
        parent: parent,
        rowData: rowData,
        type: type,
      },
      header: rowData.name,
      width: '70%',
    });
  }

  // Changing Graph
  clickGraph(index, passed, failed, title) {
    this.data[index] = {
      labels: ['Passed', 'Failed'],
      datasets: [
        {
          data: [passed, failed],
          backgroundColor: ['#089724', '#e50637'],
          hoverBackgroundColor: ['#089724', '#e50637'],
        },
      ],
    };
    this.options[index].title.text = title;
  }
}
