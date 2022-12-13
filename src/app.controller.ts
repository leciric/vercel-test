import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createTest() {
    return randomUUID();
  }
}
