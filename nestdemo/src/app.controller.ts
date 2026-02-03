import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  findAll() {
    return this.appService.findAll();
  }

  @Get('create')
  create() {
    return this.appService.create();
  }
  @Get('posts')
  async findPosts() {
    return await this.appService.findPosts();
  }
}
