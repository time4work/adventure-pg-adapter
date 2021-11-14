import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, BeforeInsert } from 'typeorm';
import { v4 } from 'uuid';
import { Character } from './Character';
import { DialogNode } from './DialogNode';
import { DialogCondition } from './DialogCondition';
import { DialogResponse } from './DialogResponse';

@Entity({ name: 'dialog' })
export class Dialog {
    @PrimaryGeneratedColumn('uuid')
    public id: number;

    @Column({
        length: '200',
        nullable: false,
    })
    public label: string;

    @Column({
        length: '500',
        nullable: true,
    })
    public description?: string;

    @ManyToOne((type) => Character, (character) => character.dialogs, {
        nullable: false,
    })
    public character: Character;

    @OneToOne((type) => DialogNode, {
        nullable: false,
    })
    public start: DialogNode;

    @OneToMany((type) => DialogNode, (dialogNode) => dialogNode.dailog, {
        cascade: true,
    })
    public nodes: DialogNode[];

    @OneToMany((type) => DialogCondition, (condition) => condition.dialog, {
        cascade: true,
    })
    public conditions: DialogCondition[];

    @OneToMany((type) => DialogResponse, (response) => response.dialog, {
        cascade: true,
    })
    public responses: DialogResponse[];
    
	@BeforeInsert()
	addId() {
		this.id = v4();
	}
}
