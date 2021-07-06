import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  // MessagesComponentを作成する際、シングルトンな MessageService インスタンスをそのプロパティへ注入
  // messageService はhtmlテンプレート内でバインドして使用するため、publicの必要がある
  // Angular はコンポーネント内の パブリック なプロパティのみをバインドする
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
