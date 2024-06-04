import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../../../shared/models/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  constructor(private router: Router) { }

  http = inject(HttpClient);
  baseURL = 'https://localhost:7016/api/Patient';

  AppointmentForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    age: new FormControl<number>(0, Validators.required),
    email: new FormControl<string>('', [Validators.email]),
    phone: new FormControl<string>('', Validators.required),
    address: new FormControl<string>('', Validators.required),
    isActive: new FormControl<boolean>(false, Validators.required),
  })


  // Appointment$ = this.addPatients(this.AppointmentForm.value);

  onFormSubmit() {
    if (this.AppointmentForm.valid) {
      // console.log('Form submitted!', this.AppointmentForm.value);
      const RequestDto = {
        name: this.AppointmentForm.value.name,
        age: this.AppointmentForm.value.age,
        email: this.AppointmentForm.value.email,
        phone: this.AppointmentForm.value.phone,
        address: this.AppointmentForm.value.address,
        isActive: this.AppointmentForm.value.isActive,
      }

      this.http.post<Patient>(this.baseURL, RequestDto)
        .subscribe({
          next: (response) => {
            console.log(response)
            this.router.navigate(['patients']);
          },
          error: (err) => {
            console.error(err);
          }
        })
    } else {
      this.AppointmentForm.markAllAsTouched();
    }
  }

  private addPatients(patientData: any): Observable<Patient> {
    return this.http.post<Patient>('baseURL', patientData);
  }
}
