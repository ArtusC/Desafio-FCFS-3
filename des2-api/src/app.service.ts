import { Injectable } from '@nestjs/common';
import { Routes } from './entities/Routes';

@Injectable()
export class AppService {
  private routes: Routes[] = [
    {
      title: 'Primeira',
      startPosition: {
        latitude: -11.111,
        longitude: 11.111,
      },
      endPosition: {
        latitude: -22.222,
        longitude: 22.222,
      },
    },
    {
      title: 'Segunda',
      startPosition: {
        latitude: -33.333,
        longitude: 33.333,
      },
      endPosition: {
        latitude: -44.444,
        longitude: 44.444,
      },
    },
    {
      title: 'Terceira',
      startPosition: {
        latitude: -55.555,
        longitude: 55.555,
      },
      endPosition: {
        latitude: -66.666,
        longitude: 66.666,
      },
    },
    {
      title: 'Quarta',
      startPosition: {
        latitude: -77.777,
        longitude: 77.777,
      },
      endPosition: {
        latitude: -88.888,
        longitude: 88.888,
      },
    },
    {
      title: 'Quinta',
      startPosition: {
        latitude: -99.999,
        longitude: 99.999,
      },
      endPosition: {
        latitude: -100.00,
        longitude: 100.00
      },
    },
  ];

  async getRoutes() {
      return this.routes
  }
}

