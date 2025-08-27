import { ObjectId } from 'mongoose';
import { type Params } from '../types/common';
import { UserStatus } from '../constants/app.contant';

class BaseService {
  protected model: any;

  constructor(model: any) {
    this.model = model;
  }

  async create(data: any) {
    return await this.model.create(data);
  }

  async update(id: ObjectId, data: any) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: ObjectId) {
    return await this.model.findByIdAndDelete(id);
  }

  async findById(id: ObjectId) {
    return await this.model.findById(id).lean();
  }

  async findAll(filter: Record<string, any> = {}, options: Params = {}) {
    return await this.model.find(filter, null, options).lean();
  }

  async findOne(filter: Record<string, any> = {}) {
    return await this.model.findOne(filter).lean();
  }

  async count(filter: Record<string, any> = {}) {
    return await this.model.countDocuments(filter);
  }

  async softDelete(id: ObjectId) {
    return await this.model.findByIdAndUpdate(
      id,
      { deletedAt: new Date(), status: UserStatus.ARCHIVED },
      { new: true }
    );
  }
}

export default BaseService;
