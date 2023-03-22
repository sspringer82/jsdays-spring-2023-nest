import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // PUT http://localhost:3000/42
  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() updatedThing: object,
  ): Promise<string> {
    console.log(id);
    console.log(updatedThing);
    return Promise.resolve('big success');
  }
}
