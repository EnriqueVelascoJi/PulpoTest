import { Test, TestingModule } from '@nestjs/testing';
import { MonetaryhelpController } from '../../monetaryhelp/monetaryhelp.controller';

describe('MonetaryhelpController', () => {
  let controller: MonetaryhelpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonetaryhelpController],
    }).compile();

    controller = module.get<MonetaryhelpController>(MonetaryhelpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
