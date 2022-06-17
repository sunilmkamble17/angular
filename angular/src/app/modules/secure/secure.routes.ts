import { Routes, RouterModule } from '@angular/router';
import { ControlCenterComponent } from './control-center/control-center.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { NetworkComponent } from './network/network.component';
import { RbcComponent } from './rbc/rbc.component';
import { UserComponent } from './user/user.component';

export const SECURE_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'network', component: NetworkComponent },
    { path: 'controlcenter', component: ControlCenterComponent },
    { path: 'rbc', component: RbcComponent },
    { path: 'user', component: UserComponent },
    { path: 'deployment', component: DeploymentComponent },
];
