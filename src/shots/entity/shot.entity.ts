import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class SHOT_DET {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  code: string;

}