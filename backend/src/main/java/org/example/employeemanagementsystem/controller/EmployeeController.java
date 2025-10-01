package org.example.employeemanagementsystem.controller;


import jakarta.validation.Valid;
import org.example.employeemanagementsystem.entity.Employee;
import org.example.employeemanagementsystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody Employee employee){
        Employee saved = employeeService.saveEmployee(employee);
        return new  ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployeeById(id)
                .map(emp -> ResponseEntity.ok(emp))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployeeById(id);
        return ResponseEntity.noContent().build();
    }
}
