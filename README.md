# Employee Management System

A full-stack application built with **Spring Boot (backend)** and **Angular (frontend)**.

## 📁 Project Structure
- `backend/` – Java, Spring Boot, Hibernate, MySQL  
- `frontend/` – Angular, TypeScript, HTML/CSS

## ▶️ How to Run

### Backend
1. Ensure MySQL is running with a database named `employee_db`.
2. Update `backend/src/main/resources/application.properties` with your MySQL credentials.
3. Run the Spring Boot app:
   ```bash
   cd backend
   ./mvnw spring-boot:run      # Linux/Mac
   # or
   mvnw.cmd spring-boot:run    # Windows