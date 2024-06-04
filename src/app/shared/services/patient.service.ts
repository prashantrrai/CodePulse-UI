import { inject, Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  http = inject(HttpClient);
  baseURL = 'https://localhost:7016/api/Patient';

  GetPatient$ = this.getPatients();
  // Appointment$ = this.addPatients();

  private getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseURL);
  }

  private addPatients(patientData: any): Observable<Patient> {
    return this.http.post<Patient>('baseURL', patientData);
  }
}