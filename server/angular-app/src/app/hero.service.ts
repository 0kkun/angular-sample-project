import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


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

  getHeroes(): Hero[] {
    return HEROES;
  }
}
