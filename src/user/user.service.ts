import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) 
    private userRepository: Repository<UserEntity>){

    }

    async showAll(){
        return await this.userRepository.find();
    }

    async create(data: UserDTO){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    async read(id: Number){
        return await this.userRepository.findOne({where: {id}});
    }

    async update(id: Number, data: Partial<UserDTO>){
        await this.userRepository.update({id}, data);
        return await this.userRepository.findOne({id});
    }

    async destroy(id: Number){
        await this.userRepository.delete({id});
        return {deleted: true};
    }
}
