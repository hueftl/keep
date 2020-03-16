import { Controller, Get } from '@nestjs/common';

import { Color } from '@project-keep/api-interfaces';
import { AppService } from './app.service';

import {
  GW_COLORS,
  VALLEJO_COLORS,
  SCALE75_COLORS,
  PRIVATEER_PRESS_COLORS,
  REAPER_COLORS
} from './mocks/mock_colours';

@Controller()
export class AppController {
  gwColors = GW_COLORS;
  vallejoColors = VALLEJO_COLORS;
  scaleColors = SCALE75_COLORS;
  ppColors = PRIVATEER_PRESS_COLORS;
  reaperColors = REAPER_COLORS;

  constructor(private readonly appService: AppService) {}

  @Get('gw_colors')
  getGwColours(): Color[] {
    return this.gwColors;
  }

  @Get('vallejo_colors')
  getVallejoColours(): Color[] {
    return this.vallejoColors;
  }

  @Get('vallejo_colors')
  getScaleColours(): Color[] {
    return this.scaleColors;
  }

  @Get('pp_colors')
  getPrivateerPressColours(): Color[] {
    return this.ppColors;
  }

  @Get('reaper_colors')
  getReaperColours(): Color[] {
    return this.reaperColors;
  }
}
