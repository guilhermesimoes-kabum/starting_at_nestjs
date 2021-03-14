import { Controller, Get, Post, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findAllAbCd(): string {
    return 'This requestion contains character wildcard';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a ${params.id} cat`;
  }

  @Get('/byid/:id')
  findById(@Param('id') id: string): string {
    return `This action returns a ${id} cat`;
  }

  @Get('/returnObservable')
  findAllObservable(): Observable<any[]> {
    return of(['parameterone', 'parametertwo']);
  }

  @Get('/returnPromise')
  async findAllPromise(): Promise<any[]> {
    return ['parameterone', 'parametertwo'];
  }
}
