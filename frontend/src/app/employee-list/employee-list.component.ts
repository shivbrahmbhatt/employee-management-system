// src/app/employee-list/employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Employee List</h2>
    <div *ngIf="loading">Loading...</div>
    <table border="1" *ngIf="!loading" style="width:100%; border-collapse: collapse; margin-top: 10px;">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let emp of employees">
          <td>{{ emp.id }}</td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.email }}</td>
          <td>{{ emp.department }}</td>
          <td>{{ emp.salary | currency }}</td>
        </tr>
      </tbody>
    </table>
    <button (click)="loadEmployees()" style="margin-top: 10px;">Refresh</button>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  loading = false;

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.loading = true;
    this.service.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Failed to load employees');
      }
    });
  }
}