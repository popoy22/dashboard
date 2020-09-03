import { Component, OnInit } from '@angular/core';
import { TestsuiteService } from '../../services/testsuite.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tests: TreeNode[];

  constructor(private testService: TestsuiteService) {}

  ngOnInit(): void {
    this.loadTreeTable();
  }

  loadTreeTable() {
    this.testService.getTests().then((tests) => (this.tests = tests));
  }
}
