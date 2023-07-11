import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Chat } from '@prisma/client';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createMessage(chat: Chat): Promise<Chat> {
    return await this.prisma.chat.create({
      data: chat,
    });
  }

  async getMessages(): Promise<Chat[]> {
    console.log(await this.prisma.chat.findMany());
    return await this.prisma.chat.findMany({orderBy:{id:"desc"}});
  }
}