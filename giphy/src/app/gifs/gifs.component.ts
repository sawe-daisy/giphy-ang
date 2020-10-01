import { Component, OnInit } from '@angular/core';
import { Giphy } from '../giphy';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor( private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.giphyService.gifRequest()
    .subscribe((res: Response) => {
      for (let i = 0; i < res[ 'data' ].length; i++){
        
        // console.log([res['data'][i]['images']['original']['url']]);
      }
    });
  }

}
