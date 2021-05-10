import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeSsppController } from './employee-sspp.controller';

describe('EmployeeSspp Controller', () => {
  let controller: EmployeeSsppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeSsppController],
    }).compile();

    controller = module.get<EmployeeSsppController>(EmployeeSsppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
