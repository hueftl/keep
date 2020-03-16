import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import {
  GW_COLORS,
  VALLEJO_COLORS,
  SCALE75_COLORS,
  PRIVATEER_PRESS_COLORS,
  REAPER_COLORS
} from './mocks/mock_colours';

describe('AppController', () => {
  let app: TestingModule;
  const gwColors = GW_COLORS;
  const vallejoColors = VALLEJO_COLORS;
  const scaleColors = SCALE75_COLORS;
  const ppColors = PRIVATEER_PRESS_COLORS;
  const reaperColors = REAPER_COLORS;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('getGwColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getGwColours()).toEqual(gwColors);
    });
  });

  describe('getVallejoColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getVallejoColours()).toEqual(vallejoColors);
    });
  });

  describe('getScaleColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getScaleColours()).toEqual(scaleColors);
    });
  });

  describe('getPrivateerPressColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getPrivateerPressColours()).toEqual(ppColors);
    });
  });

  describe('getReaperColours', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getReaperColours()).toEqual(reaperColors);
    });
  });
});
