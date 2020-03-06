import { Controller, Get } from '@nestjs/common';

import { Message } from '@project-keep/api-interfaces';
import { AppService } from './app.service';

import { Colour, GW_COLOURS } from './mocks/mock_colours';

@Controller()
export class AppController {
  gwColours = GW_COLOURS;

  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getGwColours(): Colour[] {
    //return this.appService.getData();
    return this.gwColours;
  }
}
