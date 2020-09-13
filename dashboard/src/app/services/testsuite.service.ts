import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestsuiteService {
  constructor(private http: HttpClient) {}

  getTests() {
    return this.http
      .get<any>('assets/tests.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }

  getByEnviroment() {
    return this.http
      .get<any>('assets/byEnviroment.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }

  getByCountry() {
    return this.http
      .get<any>('assets/byCountry.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }

  getResults(url) {
    return this.http
      .get<any>(url)
      .toPromise()
      .then((res) => <any>res.data)
      .then((data) => {
        return data;
      });
  }
}
