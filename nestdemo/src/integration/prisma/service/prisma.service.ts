// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // 1️⃣ 创建 PostgreSQL adapter
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });

    // 2️⃣ 调用 PrismaClient 构造函数
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect(); // 启动时连接数据库
  }

  async onModuleDestroy() {
    await this.$disconnect(); // 模块销毁时断开数据库
  }
}
