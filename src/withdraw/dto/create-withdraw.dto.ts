import { IsEnum, IsNotEmpty } from 'class-validator';
import { TransactionMethod } from './transactionMethod.enum';

export class CreateWithdrawDto {
  @IsNotEmpty()
  accountNumber: string;

  @IsNotEmpty()
  amount: string;

  @IsNotEmpty()
  @IsEnum(TransactionMethod)
  transactionMethod: TransactionMethod;
}
