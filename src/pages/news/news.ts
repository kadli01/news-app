import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import * as Config from '../../config';


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

	news: any;

	loaded: boolean;
	imgUrl = Config.API.IMAGE;

	constructor(public navCtrl: NavController, public navParams: NavParams, public newsProvider: NewsProvider) {
		
		var id = navParams.get('id');

		this.newsProvider.getNews(id)
		.then(response => {
		    this.news = response;
		    this.loaded = true;
	    });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NewsPage');
	}

}
