import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/song.interface';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public song: Song;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.song = this.navParams.get('song');
  }
}