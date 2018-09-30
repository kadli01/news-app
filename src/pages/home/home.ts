import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsPage } from '../news/news';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	newsList: any;

	constructor(public navCtrl: NavController, public newsProvider: NewsProvider) {
		this.newsProvider.getNews()
		.then(response => {
			// console.log('responsie', response.data.data);
		    this.newsList = response.data.data;
	    });
	}

	showNews(id)
	{
		console.log(id);

		this.navCtrl.push(NewsPage, { id: id});
	}

}
