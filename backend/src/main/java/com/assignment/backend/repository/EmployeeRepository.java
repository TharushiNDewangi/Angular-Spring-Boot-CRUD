package com.assignment.backend.repository;

import com.assignment.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//JpaRepository expose database through methods
//like save,findby it age ewa
//provide out of box implementation all the database methods
//dao develop kranna linna ona na implemetation code
//All Superinterfaces:
//CrudRepository<T,ID>, PagingAndSortingRepository<T,ID>, QueryByExampleExecutor<T>, Repository<T,ID>
//All Known Subinterfaces:
//JpaRepositoryImplementation<T,ID>
//All Known Implementing Classes:
//QuerydslJpaRepository, SimpleJpaRepository

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
