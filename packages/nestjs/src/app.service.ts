import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { [x: string]: string } {
    return {
      Hello: 'World',
    };
  }
}
