import { Test, TestingModule } from '@nestjs/testing';
import { MonetaryhelpService } from './monetaryhelp.service';

describe('MonetaryhelpService', () => {
  let service: MonetaryhelpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonetaryhelpService],
    }).compile();

    service = module.get<MonetaryhelpService>(MonetaryhelpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
