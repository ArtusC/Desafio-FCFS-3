import { Controller, Get } from '@nestjs/common';
import { Routes } from './entities/Routes';
import { AppService } from './app.service';

@Controller('routes')
export class AppController {
    constructor(private appService: AppService) {}

    @Get()
    async getRoutes(): Promise<Routes[]> {
        return this.appService.getRoutes();
      }
      
  }