import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',                 // コンポーネントのCSS要素セレクター。表示したい場所にこの名前で指定する。
  templateUrl: './heroes.component.html', // コンポーネントのテンプレートファイルの場所
  styleUrls: ['./heroes.component.css']   // コンポーネントのプライベートCSSスタイルの場所
})
export class HeroesComponent implements OnInit {

  // HeroインターフェースでHero型に指定
  heroes: Hero[] = [];

  // HeroService の注入
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
