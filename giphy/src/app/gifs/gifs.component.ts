import { Component, OnInit } from '@angular/core';
import { Giphy } from '../giphy';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gif: Giphy;


  constructor( private giphyService: GiphyService) { }
  gifs = [];

  ngOnInit(): void {
    this.giphyService.gifRequest()
    .subscribe((res: Response) => {
      for (let i = 0; i < res[ 'data' ].length; i++){
        let gifTitle = res['data'][i]['title'];
        let gifUname = res['data'][i]['username'];
        let gifImage = res['data'][i]['images']['original']['url'];
        let  giphy = new Giphy(gifTitle, gifUname, gifImage);
        this.gifs.push(giphy);
      }
    });
  }

}
