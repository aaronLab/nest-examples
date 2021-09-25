import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
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
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'This action returns all cats';
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
