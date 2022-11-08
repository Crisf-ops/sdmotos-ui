import { enviroment } from "../environment/environment"


export const endpoints = {

  getListClient: enviroment.records + 'records',
  login: enviroment.records + 'loginSdmotos',
  saveUser: enviroment.records + 'records/saveUser',
  addVehicle: enviroment.records + 'vehicle/createVehicle',
  deleteUser: enviroment.records + 'records/deleteUser',
  addRepair: enviroment.records + 'repair/createdRepair',
  getVehicle: enviroment.records + 'vehicle/getVehicle',
  deleteVehicle: enviroment.records + 'vehicle/deleteRepair/',
  getUser: enviroment.records + 'records/id',
}