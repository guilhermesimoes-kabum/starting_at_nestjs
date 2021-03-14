import { Controller, Get, Post, Param } from '@nestjs/common';

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
}
