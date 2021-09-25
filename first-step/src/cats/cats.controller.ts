import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'This action adds a new cat.';
  }

  @Get('docs')
  @Redirect('http://aaronlab.net', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://github.com/aaronLab' };
    }
  }

  @Get()
  findAll(@Req() request: Request): Observable<any[]> {
    console.log(request);
    return of([]);
  }

  @Get('ab*cd')
  wildCard(): string {
    return 'This route uses a wildcard';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id}`;
  }
}
