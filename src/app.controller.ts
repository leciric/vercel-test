import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createTest(@Body() body: any) {
    const { email, password, name } = body;
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    return user;
  }
}
