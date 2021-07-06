import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// ヒーロー名のリンクのグリッド表示
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // 配列を1番目と5番目でスライスし、トップヒーローの4つだけ（2番目、3番目、4番目、5番目）を返す
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
