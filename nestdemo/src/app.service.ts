import { PrismaService } from '@integration/prisma/service/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      include: {
        posts: {
          where: {
            published: true,
          },
        },
      },
    });
  }
  async create() {
    return this.prisma.$transaction(async (tx) => {
      // const user = await this.prisma.user.create({
      //   data: {
      //     name: 'Alice',
      //     email: 'zhiyuanzeng2@neptia.net',
      //   },
      // });
      const post = await this.prisma.post.create({
        data: {
          title: 'Visa 600开银行账户',
          content: `请问大家澳洲哪个银行给Visa 600持有人开户？
问了CBA说不给旅游签的人开。
——————————我是分割线————————
更新：在ANZ办好啦
谢谢大家～`,
          published: true,
          authorId: 2,
          categoryId: 1,
        },
      });
      return {
        // user,
        post,
      };
    });
  }

  async findPosts() {
    return await this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }
}
