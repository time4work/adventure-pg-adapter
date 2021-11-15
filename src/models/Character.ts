import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert } from 'typeorm';
import { v4 } from 'uuid';
import { Dialog } from './Dialog';

@Entity({ name: 'character' })
export class Character {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({
        length: '200',
        nullable: false,
    })
    public name: string;

    @Column({
        length: '500',
        nullable: true,
    })
    public description?: string;

    @OneToMany((type) => Dialog, (dialog) => dialog.character, {
        cascade: true,
    })
    public dialogs: Dialog[];

	@BeforeInsert()
	addId() {
		this.id = v4();
	}
}
