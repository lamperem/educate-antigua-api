export class Person {}
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TABLE_NAME } from '../../configuration/constants';

@Entity({ name: TABLE_NAME.PERSONS })
export class PersonEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'person_id',
    })
    person_id: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '50',
        comment: 'dni',
    })
    dni: string;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'dni type',
    })
    dni_type: number;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '25',
        comment: 'Name',
    })
    name: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '25',
        comment: 'Surname',
    })
    surname: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: '25',
        comment: 'Day of birthday',
    })
    dob: string;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'Gender',
    })
    gender: number;

    @Column({
        nullable: false,
        type: 'int',
        comment: 'Marital status',
    })
    marital_status: number;

    @Column({
        nullable: false,
        type: 'boolean',
        comment: 'Is foreign',
    })
    is_foreign: boolean;

    @Column({
        nullable: false,
        type: 'boolean',
        comment: 'Is minor',
    })
    is_minor: boolean;

    @Column({
        nullable: false,
        type: 'boolean',
        comment: 'address country iso',
    })
    address_country_iso: number;

    @Column({
        nullable: false,
        type: 'boolean',
        comment: 'address local state',
    })
    address_local_state: number;

    @Column({
        nullable: false,
        type: 'boolean',
        comment: 'address local city',
    })
    address_local_city: number;

    @Column({
        nullable: false,
        type: 'boolean',
        comment: 'address local zone',
    })
    address_local_zone: number;

    @Column({
        nullable: false,
        type: 'varchar',
        comment: 'contact email',
    })
    contact_email: string;

    @Column({
        nullable: false,
        type: 'varchar',
        comment: 'contact phone',
    })
    contact_phone: string;

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
