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
  @Get()
  @Redirect('https://github.com/aaronlab')
  findAll(@Req() request: Request) {
    console.log(request.headers['user-agent']);
    return 'This action returns all cats';
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Req() request: Request) {
    console.log(request.body['name']);
    return 'This action adds a new cat';
  }

  @Get('ab*cd')
  wildCard() {
    return 'This route uses a wildcard.';
  }

  @Get('docs')
  @Redirect('https://github.com/aaronlab', 301)
  getDocs(@Query('version') version) {
    if (version && version === '1') {
      return { url: 'http://aaronlab.net', statusCode: 302 };
    }
  }

  @Get('find/:id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat.`;
  }
}
