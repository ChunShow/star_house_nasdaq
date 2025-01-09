import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'CD TEST 위한 수정';
  }

  @Get('users')
  async findAllUsers() {
    console.log('find all users');
    return this.appService.findAllUsers();
  }
  @Post('users')
  async createUser() {
    return this.appService.createUser('test', 'user');
  }
}
