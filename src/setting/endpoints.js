import { enviroment } from "../environment/environment"


export const endpoints = {

  getListClient: enviroment.records + 'records',
  login: enviroment.records + 'loginSdmotos',
  saveUser: enviroment.records + 'records/saveUser',
  addVehicle: enviroment.records + 'vehicle/createVehicle'
}