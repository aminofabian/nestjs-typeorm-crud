import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()

export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    
    findUsers () {
      return this.userRepository.find()
    }
    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({
          ...userDetails,
          dateCreated: new Date(),
        });
        return this.userRepository.save(newUser);
      }
        deleteUser(id: number) {
          return this.userRepository.delete({id});
        }
}
