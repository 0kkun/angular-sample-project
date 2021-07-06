import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',                 // コンポーネントのCSS要素セレクター。表示したい場所にこの名前で指定する。
  templateUrl: './heroes.component.html', // コンポーネントのテンプレートファイルの場所
  styleUrls: ['./heroes.component.css']   // コンポーネントのプライベートCSSスタイルの場所
})
export class HeroesComponent implements OnInit {

  // HeroインターフェースでHero型に指定
  heroes: Hero[] = [];
  // selectedHero?: Hero; 使わなくなったのでコメントアウト

  // HeroService の注入
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  // 使わなくなったのでコメントアウト
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // Observableで取得したデータはsubscribeで受け取る
  // subscribeは、出力された配列をコールバックに渡し、コンポーネントの heroes プロパティにデータを設定している
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
