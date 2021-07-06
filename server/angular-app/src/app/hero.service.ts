import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; // of関数を使って非同期処理でサーバーからのデータ取得


// 注入可能なサービスにすることを宣言
@Injectable({
  providedIn: 'root'
})

/**
 * ヒーローデータのモックを返すサービスクラス
 * コンポーネントからデータ取得ロジックを切り離す
 */
export class HeroService {

  constructor() { }

  // モックヒーローの配列を出力する。Observableで非同期処理でデータを取得
  // Observableはヒーローの配列を出力するのを待っている状態
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
