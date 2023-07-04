import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from '@prisma/client';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}
  
  @Get()
  async getMessages(): Promise<Chat[]>{
    return this.chatService.getMessages()
  }
  @Post()
  async createMessage(@Body() chat: Chat): Promise<Chat>{
    return this.chatService.createMessage(chat);
  }
}
