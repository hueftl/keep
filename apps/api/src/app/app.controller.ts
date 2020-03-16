import { Controller, Get } from '@nestjs/common';

import { Colour } from '@project-keep/api-interfaces';
import { AppService } from './app.service';

import { GW_COLOURS } from './mocks/mock_colours';

@Controller()
export class AppController {
  gwColours = GW_COLOURS;

  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getGwColours(): Colour[] {
    return this.gwColours;
  }
}
