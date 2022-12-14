import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(private readonly prismaService: PrismaService){

  }

  async create(createUserDto: CreateUserDto) {
   await this.prismaService.user.create({
      data: {
        name: createUserDto.name
      }
    })
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.user.findFirst({
      where:{
        id: id
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where:{
        id : id
      },
      data:{
        name: updateUserDto.name
      }
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
