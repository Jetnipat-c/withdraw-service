import { Injectable } from '@nestjs/common';
import { CreateWithdrawDto } from './dto/create-withdraw.dto';
import { UpdateWithdrawDto } from './dto/update-withdraw.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Withdraw } from './entities/withdraw.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WithdrawService {
  constructor(
    @InjectRepository(Withdraw)
    private withdrawsRepository: Repository<Withdraw>,
  ) {}
  async create(createWithdrawDto: CreateWithdrawDto) {
    return await this.withdrawsRepository.save(createWithdrawDto);
  }

  async findAll() {
    return await this.withdrawsRepository.find();
  }

  async findOne(id: string) {
    return await this.withdrawsRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateWithdrawDto: UpdateWithdrawDto) {
    return await this.withdrawsRepository.update(id, updateWithdrawDto);
  }

  async remove(id: string) {
    return await this.withdrawsRepository.delete(id);
  }
}
