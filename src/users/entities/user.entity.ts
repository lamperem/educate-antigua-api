import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';

@Entity({ name: TABLE_NAME.USERS })
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    user_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'Username',
    })
    username: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '25',
        comment: 'User password',
    })
    password: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '25',
        comment: 'User password',
    })
    password_hash: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '25',
        comment: 'User avatar',
    })
    avatar: string;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'User rol',
    })
    role: number;

    // Audit
    @Column({
        nullable: false,
        type: 'int',
        comment: 'Id de usuario'
    })
    created_by: number;

    @CreateDateColumn({
        nullable: false,
        type: 'timestamp',
        comment: 'Date created'
    })
    creation_date: Date;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'Id de usuario'
    })
    modified_by: number;

    @UpdateDateColumn({
        nullable: false,
        type: 'timestamp',
        comment: 'Date created'
    })
    modification_date: Date;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'Id de usuario'
    })
    status: number;

}
