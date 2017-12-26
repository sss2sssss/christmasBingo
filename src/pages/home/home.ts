import { Component } from '@angular/core';
import { NavController, ToastController, Toast, Platform } from 'ionic-angular';
import { PreviewAnswerPage } from '../preview-answer/preview-answer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  step: number = 0;
  previousAnswer: string[] = [];
  toast: Toast = null;
  canShowToast: boolean = true;
  spinFinish: boolean = true;
  //Put all your game pictures to here
  /*gameSet = [{
    picture: ["assets/imgs/setA/A01.png", "assets/imgs/setA/A02.png", "assets/imgs/setA/A03.png", "assets/imgs/setA/A04.png", "assets/imgs/setA/A05.png", "assets/imgs/setA/A06.png", "assets/imgs/setA/A07.png", "assets/imgs/setA/A08.png", "assets/imgs/setA/A09.png", "assets/imgs/setA/A10.png", "assets/imgs/setA/A11.png", "assets/imgs/setA/A12.png", "assets/imgs/setA/A13.png", "assets/imgs/setA/A14.png", "assets/imgs/setA/A15.png", "assets/imgs/setA/A16.png", "assets/imgs/setA/A17.png", "assets/imgs/setA/A18.png", "assets/imgs/setA/A19.png", "assets/imgs/setA/A20.png", "assets/imgs/setA/A21.png", "assets/imgs/setA/A22.png", "assets/imgs/setA/A23.png", "assets/imgs/setA/A24.png", "assets/imgs/setA/A25.png", "assets/imgs/setA/A26.png", "assets/imgs/setA/A27.png", "assets/imgs/setA/A28.png", "assets/imgs/setA/A29.png", "assets/imgs/setA/A30.png"]
  },{
    picture: ["assets/imgs/setC/C01.png", "assets/imgs/setC/C02.png", "assets/imgs/setC/C03.png", "assets/imgs/setC/C04.png", "assets/imgs/setC/C05.png", "assets/imgs/setC/C06.png", "assets/imgs/setC/C07.png", "assets/imgs/setC/C08.png", "assets/imgs/setC/C09.png", "assets/imgs/setC/C10.png", "assets/imgs/setC/C11.png", "assets/imgs/setC/C12.png", "assets/imgs/setC/C13.png", "assets/imgs/setC/C14.png", "assets/imgs/setC/C15.png", "assets/imgs/setC/C16.png", "assets/imgs/setC/C17.png", "assets/imgs/setC/C18.png", "assets/imgs/setC/C19.png", "assets/imgs/setC/C20.png", "assets/imgs/setC/C21.png", "assets/imgs/setC/C22.png", "assets/imgs/setC/C23.png", "assets/imgs/setC/C24.png", "assets/imgs/setC/C25.png"]
  },{
    picture: ["assets/imgs/setD/D01.png", "assets/imgs/setD/D02.png", "assets/imgs/setD/D03.png", "assets/imgs/setD/D04.png", "assets/imgs/setD/D05.png", "assets/imgs/setD/D06.png", "assets/imgs/setD/D07.png", "assets/imgs/setD/D08.png", "assets/imgs/setD/D09.png", "assets/imgs/setD/D10.png", "assets/imgs/setD/D11.png", "assets/imgs/setD/D12.png", "assets/imgs/setD/D13.png", "assets/imgs/setD/D14.png", "assets/imgs/setD/D15.png", "assets/imgs/setD/D16.png", "assets/imgs/setD/D17.png", "assets/imgs/setD/D18.png", "assets/imgs/setD/D19.png", "assets/imgs/setD/D20.png", "assets/imgs/setD/D21.png", "assets/imgs/setD/D22.png", "assets/imgs/setD/D23.png", "assets/imgs/setD/D24.png", "assets/imgs/setD/D25.png"]
  }];*/ 
  gameSet = [{picture:["path/to/something", "path/to/something"]}];
  previousSet: {previousAnswer: string[], currentAnswer: string, currentGame: string[]}[] = [];
  //The starting gif which been taken out to avoid legal issue
  startingPicture: string = "path/to/something"
  currentAnswer: string = this.startingPicture;
  currentGame: string[] = [];
  constructor(private navCtrl: NavController, private toastCtrl: ToastController, private platform: Platform) {
    this.currentGame = this.gameSet[this.step].picture;
  }

  onPreview(index: number){
    let previewPic = this.previousAnswer[index];
    this.navCtrl.push(PreviewAnswerPage, {picUrl: previewPic})
  }

  onRandom(){
    if(this.currentGame.length > 0){
      const randomNumber = Math.floor(Math.random()*this.currentGame.length);
      const tempCurrentAnswer = this.currentAnswer;
      let duration = 1000;
      this.spinFinish = false;
      if(this.currentGame.length < 10){
        duration = this.currentGame.length * 100;
      }
      const startTime = new Date().getTime();
      let animationTimer = setInterval(() => {
        let tempAnswer = Math.floor(Math.random()*this.currentGame.length);
        this.currentAnswer = this.currentGame[tempAnswer];
        if (new Date().getTime() - startTime > duration) {
          this.spinFinish = true;
          if(tempCurrentAnswer == this.startingPicture /*"assets/imgs/ready.gif"*/){
            this.currentAnswer = this.currentGame[randomNumber];
            this.currentGame.splice(randomNumber, 1);
          } else {
            this.previousAnswer = this.previousAnswer.slice().reverse();
            this.previousAnswer.push(tempCurrentAnswer);
            this.previousAnswer = this.previousAnswer.slice().reverse();
            this.currentAnswer = this.currentGame[randomNumber];
            this.currentGame.splice(randomNumber, 1);
          }  
          clearInterval(animationTimer);
        }
      }, 100);
    } else {
      this.presentToast("Already finish the current set!")
    }
  }

  resetGame(){
    this.currentAnswer = this.startingPicture;
    this.previousAnswer = [];
    this.currentGame = this.gameSet[this.step].picture; 
  }

  onNext(){
    if(this.step != this.gameSet.length - 1){
      if(!this.previousSet[this.step]){
        this.previousSet.push({
          previousAnswer: this.previousAnswer,
          currentAnswer: this.currentAnswer,
          currentGame: this.currentGame
        });
        this.step++;
        this.previousAnswer = [];
        this.currentGame = this.gameSet[this.step].picture;
        this.currentAnswer = this.startingPicture;
      } else {
        this.previousSet[this.step].previousAnswer = this.previousAnswer;
        this.previousSet[this.step].currentGame = this.currentGame;
        this.previousSet[this.step].currentAnswer = this.currentAnswer;
        this.step++;
        this.previousAnswer = this.previousSet[this.step].previousAnswer;
        this.currentGame = this.previousSet[this.step].currentGame;
        this.currentAnswer = this.previousSet[this.step].currentAnswer;
      }
    } else {
      this.presentToast("Already finish all the game set!")
    }
  }

  onPrevious(){
    if(!this.previousSet[this.step]){
      this.previousSet.push({
        previousAnswer: this.previousAnswer,
        currentAnswer: this.currentAnswer,
        currentGame: this.currentGame
      });
    } else {
      this.previousSet[this.step].previousAnswer = this.previousAnswer;
      this.previousSet[this.step].currentGame = this.currentGame;
      this.previousSet[this.step].currentAnswer = this.currentAnswer;
    }
    this.step--;
    this.previousAnswer = this.previousSet[this.step].previousAnswer;
    this.currentGame = this.previousSet[this.step].currentGame;
    this.currentAnswer = this.previousSet[this.step].currentAnswer;
  }

  presentToast(msg: string) {
    if (this.canShowToast) {
      this.canShowToast = false;
      this.toast = this.toastCtrl.create({
        message: msg,
        duration: 2500,
        showCloseButton: true
      });
  
      this.toast.present();
      this.toast.onDidDismiss(() => {
        this.canShowToast = true;
      });
  
    } else {
      this.toast.setMessage(msg);
      this.toast.setDuration(2500);
    }
  }

}
