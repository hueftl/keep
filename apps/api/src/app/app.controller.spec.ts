import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Colour, GW_COLOURS } from './mocks/mock_colours';

describe('AppController', () => {
  let app: TestingModule;
  const gwColours = GW_COLOURS;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getGwColours()).toEqual(gwColours);
    });
  });
});
