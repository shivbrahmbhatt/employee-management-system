import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 ADD THIS
  imports: [CommonModule, EmployeeListComponent, EmployeeFormComponent], // 👈 CommonModule is required
  template: `
    <header style="background: #f5f5f5; padding: 15px; text-align: center;">
      <h1>Employee Management System</h1>
    </header>
    <main style="padding: 20px;">
      <nav style="margin-bottom: 20px;">
        <button (click)="view = 'list'" [style.background]="view === 'list' ? '#ddd' : 'white'">View Employees</button>
        <button (click)="view = 'add'" [style.background]="view === 'add' ? '#ddd' : 'white'">Add Employee</button>
      </nav>

      <app-employee-list *ngIf="view === 'list'"></app-employee-list>
      <app-employee-form *ngIf="view === 'add'"></app-employee-form>
    </main>
  `
})
export class AppComponent {
  view: 'list' | 'add' = 'list';
}