import { Global, Module } from '@nestjs/common';

import { PrismaService } from '@integration/prisma/service/prisma.service';
@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
