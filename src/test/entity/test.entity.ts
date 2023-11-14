import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TSTG_DET {
  @PrimaryGeneratedColumn()
  TSTG_ID: number;

  @Column({ nullable: true })
  NME: string;

  @Column({ nullable: true })
  TSTG_PRCE: number;

  @Column({ nullable: true })
  TSTG_CODE: string;

}