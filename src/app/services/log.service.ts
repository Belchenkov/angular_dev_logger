import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";
import { of } from "rxjs";

import { Log } from "../models/Log";

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });

  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
