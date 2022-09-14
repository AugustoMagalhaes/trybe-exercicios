import { Request, Response } from 'express';
import IFrame from '../interfaces/Frame';
import IService from '../interfaces/IService';

export default class FrameController {
  constructor(private _service: IService<IFrame>) {}

  public async create(req: Request, res: Response<IFrame>) {
    const { material, color } = req.body;
    const frame = { material, color };
    const results = await this._service.create(frame);
    return res.status(201).json(results);
  }

  public async readOne(req: Request, res: Response<IFrame>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }
}
