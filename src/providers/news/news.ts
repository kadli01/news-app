import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

	apiUrl = 'http://192.168.0.100:5555/api';

	constructor(public http: HttpClient) {
		console.log('Hello NewsProvider Provider');

	}


	getNews() {
		// console.log('headers', this.headers);
		return new Promise(resolve => {
			this.http.get(this.apiUrl + '/news').subscribe(response => {
				resolve(response);
			}, error => {
				console.log(error);
			});
		});
	}

}
