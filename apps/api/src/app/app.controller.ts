import { Controller, Get } from '@nestjs/common';

import { Color } from '@project-keep/api-interfaces';
import { AppService } from './app.service';

import {
  GW_COLORS,
  VALLEJO_COLORS,
  SCALE75_COLORS,
  PRIVATEER_PRESS_COLORS,
  ARMYPAINTER_COLORS
} from './mocks/mock_colours';

@Controller()
export class AppController {
  gwColors = GW_COLORS;
  vallejoColors = VALLEJO_COLORS;
  scaleColors = SCALE75_COLORS;
  ppColors = PRIVATEER_PRESS_COLORS;
  apColors = ARMYPAINTER_COLORS;

  constructor(private readonly appService: AppService) {}

  @Get('gw_colors')
  getGwColors(): Color[] {
    return this.gwColors;
  }

  @Get('vallejo_colors')
  getVallejoColors(): Color[] {
    return this.vallejoColors;
  }

  @Get('vallejo_colors')
  getScaleColors(): Color[] {
    return this.scaleColors;
  }

  @Get('pp_colors')
  getPrivateerPressColors(): Color[] {
    return this.ppColors;
  }

  @Get('reaper_colors')
  getArmypainterColors(): Color[] {
    return this.apColors;
  }
}
