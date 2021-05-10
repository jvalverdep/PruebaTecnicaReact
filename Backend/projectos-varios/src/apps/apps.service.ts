import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Application } from './apps.entity';
import { assert } from 'console';

@Injectable()
export class AppsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  //** GET Find All Records */
  findAll(query?: any): Promise<Application[]> {
    return this.applicationRepository.find(query);
  }

  async createOne(application: Application) {
    assert(application.id === 0, 'Application id must be 0.');
    let applicationToCreate = new Application();
    applicationToCreate = application;

    return await this.applicationRepository.save(applicationToCreate);
  }

  async remove(id: number) {
    const applicationToDelete = await this.applicationRepository.findOne({
      id: id,
    });
    if (applicationToDelete === null || applicationToDelete === undefined) {
      return null;
    }
    return await this.applicationRepository.remove(applicationToDelete);
  }

  async update(application: Application): Promise<Application> {
    let applicationToUpdate = await this.applicationRepository.findOne({
      id: application.id,
    });
    applicationToUpdate = application;
    if (applicationToUpdate === null || applicationToUpdate === undefined) {
      return null;
    }
    return await this.applicationRepository.save(applicationToUpdate);
  }
}
