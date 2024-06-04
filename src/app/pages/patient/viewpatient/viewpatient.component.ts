import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PatientService } from '../../../shared/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpatient',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe],
  providers: [PatientService],
  templateUrl: './viewpatient.component.html',
  styleUrl: './viewpatient.component.css'
})
export class ViewpatientComponent {

  constructor(private service: PatientService, private router: Router) { }

  PatientData$ = this.service.GetPatient$;

  bookAppointment() {
    this.router.navigate(['patient/appointment']);
  }
}
