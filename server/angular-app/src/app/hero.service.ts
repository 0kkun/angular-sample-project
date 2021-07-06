import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; // of関数を使って非同期処理でサーバーからのデータ取得
import { MessageService } from './message.service';


// 注入可能なサービスにすることを宣言
@Injectable({
  providedIn: 'root'
})

/**
 * ヒーローデータのモックを返すサービスクラス
 * コンポーネントからデータ取得ロジックを切り離す
 */
export class HeroService {

  // シングルトンでサービスをDI
  constructor(private messageService: MessageService) { }

  // モックヒーローの配列を出力する。Observableで非同期処理でデータを取得
  // Observableはヒーローの配列を出力するのを待っている状態
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // 詳細ビューで使用する用のメソッド
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
