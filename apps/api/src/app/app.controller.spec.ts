import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import {
  GW_COLORS,
  VALLEJO_COLORS,
  SCALE75_COLORS,
  PRIVATEER_PRESS_COLORS,
  ARMYPAINTER_COLORS
} from './mocks/mock_colours';

describe('AppController', () => {
  let app: TestingModule;
  const gwColors = GW_COLORS;
  const vallejoColors = VALLEJO_COLORS;
  const scaleColors = SCALE75_COLORS;
  const ppColors = PRIVATEER_PRESS_COLORS;
  const apColors = ARMYPAINTER_COLORS;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('getGwColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getGwColors()).toEqual(gwColors);
    });
  });

  describe('getVallejoColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getVallejoColors()).toEqual(vallejoColors);
    });
  });

  describe('getScaleColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getScaleColors()).toEqual(scaleColors);
    });
  });

  describe('getPrivateerPressColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getPrivateerPressColors()).toEqual(ppColors);
    });
  });

  describe('getArmypainterColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getArmypainterColors()).toEqual(apColors);
    });
  });
});
