using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UltimateNeverBug.Models.Repository;

namespace UltimateNeverBug.Models.DataManager
{
    public class BlogManager : IDataRepository<Blog>
    {
        readonly EmployeeContext _EmployeeContext;
        public BlogManager(EmployeeContext context)
        {
            _EmployeeContext = context;
        }
        public IEnumerable<Blog> GetAll()
        {
            return _EmployeeContext.Blogs
                //.Include (employee =>employee.Employee)
                .ToList();
        }
        public Blog Get(long id)
        {
            return _EmployeeContext.Blogs
                  .FirstOrDefault(e => e.BlogID == id);
        }
        public void Add(Blog entity)
        {
            _EmployeeContext.Blogs.Add(entity);
            _EmployeeContext.SaveChanges();
        }
        public void Update(Blog blog, Blog entity)
        {
            blog.Titlle = entity.Titlle;
            blog.Desciprtion = entity.Desciprtion;
            blog.Picture = entity.Picture;
            blog.Type = entity.Type;
            _EmployeeContext.SaveChanges();
        }
        public void Delete(Blog blog)
        {
            _EmployeeContext.Blogs.Remove(blog);
            _EmployeeContext.SaveChanges();
        }
    }
}
