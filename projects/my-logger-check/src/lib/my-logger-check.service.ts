import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLoggerCheckService {
  constructor() {}

  logger(message: string) {
    console.log(message);
  }
}
