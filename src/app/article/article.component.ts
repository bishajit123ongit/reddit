import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Artical } from './artical.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() artical: Artical;


  voteUp(): boolean {
    this.artical.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.artical.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
