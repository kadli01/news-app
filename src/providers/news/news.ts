import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Config from '../../config';

// export  class  News {

// 	id: number;
// 	title: string;
// 	excerpt: string;
// 	description: string;
// 	featured_image: string;

// 	constructor(values: Object = {}) {

// 	Object.assign(this, values);

// 	}

// }

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

	constructor(public http: HttpClient) { }


	getNewsList() {
		return new Promise(resolve => {
			this.http.get(Config.API.URL + '/news')
			.subscribe(response => {
				resolve(response);
			}, error => {
				console.log(error);
			});
		});
	}

	getNews(id: number) {
		return new Promise(resolve => {
			this.http.get(Config.API.URL + '/news/' + id).subscribe(response => {
				resolve(response);
			}, error => {
				console.log(error);
			});
		});
	}
}
