import { FormatWidth } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  imgSrc: string='http://static2.tripoto.com/media/travel-story/ahmedabad_riverfront1.jpg';

  @Input()
  altTxt?: string='Ahmedabad Love';

  @Input()
  figCaptionTxt?: string='Ahmedabad has emerged as an important economic and industrial hub in India. It is the second-largest producer of cotton in India, due to which it was known as the Manchester of India along with Kanpur.';

  @Input()
  imgOpacity?: number=1;



  constructor() { }

  ngOnInit(): void {
  }

}
