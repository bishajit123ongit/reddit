import { Component } from '@angular/core';
import { Artical } from './article/artical.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articals: Artical[];
  constructor() {
    this.articals = [
      new Artical('Angular','https://angular.io/',10),
      new Artical('Java','https://java.com/',12),
      new Artical('Java','https://angular.io/',12)
    ];
  }
  addArtical(title: HTMLInputElement,link: HTMLInputElement): boolean{
     console.log(`the title ${title.value} and link ${link.value}`);
     this.articals.push(new Artical(title.value,link.value,0));
     title.value='';
     link.value='';
     return false;
  }
  sortedArticals(): Artical[]{
    return this.articals.sort((a:Artical,b:Artical)=>b.votes-a.votes);
  }
}
