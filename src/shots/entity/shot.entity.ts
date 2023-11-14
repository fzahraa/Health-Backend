import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class SHOT_DET {
  @PrimaryGeneratedColumn()
  SHOT_ID: number;

  @Column({ nullable: true })
  SHOT_PRCE: number;

  @Column({ nullable: true })
  NME: string;

  @Column({ nullable: true })
  SHOT_CODE: string;

}