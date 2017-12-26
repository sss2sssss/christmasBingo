import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InitiateServeProvider } from '../../providers/initiate-serve/initiate-serve';

/**
 * Generated class for the PreviewAnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-preview-answer',
  templateUrl: 'preview-answer.html',
})
export class PreviewAnswerPage {
  previewUrl: string = "";

  constructor(private navCtrl: NavController, private navParams: NavParams, private initiate: InitiateServeProvider) {
    this.previewUrl = this.navParams.get("picUrl");
  }

  ionViewCanEnter(){

  }

  goBack(){
    this.navCtrl.pop();
  }

}
