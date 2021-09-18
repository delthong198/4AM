using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UltimateNeverBug.Models.Repository;

namespace UltimateNeverBug.Models.DataManager
{
    public class EmployeeManager : IDataRepository<Employee>
    {
        readonly EmployeeContext _employeeContext;
        public EmployeeManager(EmployeeContext context)
        {
            _employeeContext = context;
        }
        public IEnumerable<Employee> GetAll()
        {
            return _employeeContext.Employees
                //.Include(blog =>blog.Blogs)
                //.Include(erole =>erole.EmployeeRoles)
                .ToList();
        }
        public Employee Get(long id)
        {
            var employee = _employeeContext.Employees
                  .FirstOrDefault(e => e.EmployeeId == id);
            //if(employee == null)
            //{
            //    return null;
            //}
            //_employeeContext.Entry(employee)
            //    .Collection(b => b.Blogs)
            //    .Load();
            return employee;
        }
        public void Add(Employee entity)
        {
            _employeeContext.Employees.Add(entity);
            _employeeContext.SaveChanges();
        }
        public void Update(Employee employee, Employee entity)
        {
            employee.Name = entity.Name;
            employee.Password = entity.Password;
            employee.Email = entity.Email;
            employee.DateOfBirth = entity.DateOfBirth;
            employee.PhoneNumber = entity.PhoneNumber;
            _employeeContext.SaveChanges();
        }
        public void Delete(Employee employee)
        {
            _employeeContext.Employees.Remove(employee);
            _employeeContext.SaveChanges();
        }
    }
}
