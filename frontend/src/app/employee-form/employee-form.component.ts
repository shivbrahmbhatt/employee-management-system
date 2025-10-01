import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Add New Employee</h2>
    <form (ngSubmit)="onSubmit()" #empForm="ngForm" style="display: flex; flex-direction: column; gap: 10px; max-width: 400px;">
      <input name="name" [(ngModel)]="employee.name" placeholder="Name *" required />
      <input name="email" [(ngModel)]="employee.email" placeholder="Email *" required email />
      <input name="dept" [(ngModel)]="employee.department" placeholder="Department *" required />
      <input name="salary" [(ngModel)]="employee.salary" placeholder="Salary *" required type="number" min="0" />

      <button type="submit" [disabled]="!empForm.form.valid">Add Employee</button>
    </form>
    <p *ngIf="success" style="color: green;">✅ Employee added successfully!</p>
  `
})
export class EmployeeFormComponent {
  employee: Employee = { name: '', email: '', department: '', salary: 0 };
  success = false;

  constructor(private service: EmployeeService) {}

  onSubmit() {
    this.service.addEmployee(this.employee).subscribe({
      next: () => {
        this.success = true;
        this.employee = { name: '', email: '', department: '', salary: 0 };
        setTimeout(() => this.success = false, 3000);
      },
      error: () => alert('Failed to add employee')
    });
  }
}