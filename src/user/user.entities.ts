import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid') id: Number;

    @Column('text') name: string;
    @Column('text') cc: Number;
    @CreateDateColumn() create: Date;
}