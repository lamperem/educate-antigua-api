import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';

@Entity({ name: TABLE_NAME.STUDENTS })
export class StudentEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'student_id',
    })
    student_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'code',
    })
    code: string;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'type',
    })
    type: number;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'person id',
    })
    person_id: number;

    @Column({
        nullable: true,
        type: 'int',
        comment: 'manager person id',
    })
    manager_person_id: number;

    @Column({
        nullable: true,
        type: 'int',
        comment: 'user id',
    })
    user_id: number;

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
