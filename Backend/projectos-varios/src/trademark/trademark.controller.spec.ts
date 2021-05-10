import { Test, TestingModule } from '@nestjs/testing';
import { TrademarkController } from './trademark.controller';

describe('Trademark Controller', () => {
  let controller: TrademarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrademarkController],
    }).compile();

    controller = module.get<TrademarkController>(TrademarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
