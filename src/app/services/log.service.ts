import { Injectable } from '@angular/core';

import { Log } from "../models/Log";

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Добавлен пользователь Dev-Master',
        date: new Date('12/03/2018 12:21:34')
      },
      {
        id: '2',
        text: 'Удалена таблица Contracts',
        date: new Date('12/03/2018 14:31:54')
      },
      {
        id: '3',
        text: 'Обновлен контакт Sandy',
        date: new Date('12/03/2018 14:36:14')
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
