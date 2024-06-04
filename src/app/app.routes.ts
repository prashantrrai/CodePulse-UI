import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ViewpatientComponent } from './pages/patient/viewpatient/viewpatient.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AppointmentComponent } from './pages/patient/appointment/appointment.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'patients', component: ViewpatientComponent },
    { path: 'patient/appointment', component: AppointmentComponent },
    { path: '**', component: NotfoundComponent },

];
