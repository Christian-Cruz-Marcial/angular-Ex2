import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ArticleComponent {
  title:string = 'Whatever you want';
  content: string = 'Some content goes here';
  isTechRelated: boolean = true;
}
