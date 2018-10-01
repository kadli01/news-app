import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { NewsPage } from '../news/news';
import * as Config from '../../config';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	newsList: any;
	imgUrl = Config.API.IMAGE;
	loaded: boolean;

	constructor(public navCtrl: NavController, public newsProvider: NewsProvider) {
		this.newsProvider.getNewsList()
		.then((response: Response) => {

		    this.newsList = response;
			this.loaded = true;
	    });

	}

	showNews(id)
	{
		this.navCtrl.push(NewsPage, { id: id});
	}

}
