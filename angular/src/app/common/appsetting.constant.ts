// baseUrl: 'https://8x12yn4aj1.execute-api.us-east-1.amazonaws.com/dev/api', // Dev Environment
// baseUrl: '', // Test Environment
// baseUrl: '', // UAT Environment
// baseUrl: '', // Prod Environment

import { environment } from 'src/environments/environment';

export class AppSetting {
  static baseUrl = environment.baseUrl;

  static signup = {
    register: AppSetting.baseUrl + `/register`,
  }

  static login = {
    userlogin: AppSetting.baseUrl + `/login`,
  }

  static forgotPassword = {
    forgotPassword: AppSetting.baseUrl + `/forgotPassword`,
  }

  static network = {
    
  }
  
  static controlCenter = {
    addControlCenter: AppSetting.baseUrl + `/addControlCenter`,
    editControlCenter: AppSetting.baseUrl + `/editControlCenter`,
    deleteControlCenter: AppSetting.baseUrl + `/deleteControlCenter`,
    getControlCenterById: AppSetting.baseUrl + `/getControlCenterById`,
    getAllControlCenter: AppSetting.baseUrl + `/getAllControlCenter`,
  }

  static rbc = {
    addRbc: AppSetting.baseUrl + `/addRbc`,
    editRbc: AppSetting.baseUrl + `/editRbc`,
    deleteRbc: AppSetting.baseUrl + `/deleteRbc`,
    getRbcById: AppSetting.baseUrl + `/getRbcById`,
    getAllRbc: AppSetting.baseUrl + `/getAllRbc`,
  }

  static user = {
    addUser: AppSetting.baseUrl + `/addUser`,
    editUser: AppSetting.baseUrl + `/editUser`,
    deleteUser: AppSetting.baseUrl + `/deleteUser`,
    getUserById: AppSetting.baseUrl + `/getUserById`,
    getAllUser: AppSetting.baseUrl + `/getAllUser`,
  }

  static deployment = {
    addDeployment: AppSetting.baseUrl + `/addDeployment`,
    editDeployment: AppSetting.baseUrl + `/editDeployment`,
    deleteDeployment: AppSetting.baseUrl + `/deleteDeployment`,
    getDeploymentById: AppSetting.baseUrl + `/getDeploymentById`,
    getAllDeployment: AppSetting.baseUrl + `/getAllDeployment`,
  }



}
