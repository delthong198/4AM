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
        readonly DataContext _DataContext;
        public BlogManager(DataContext context)
        {
            _DataContext = context;
        }
        public IEnumerable<Blog> GetAll()
        {
            return _DataContext.Blogs
                //.Include (employee =>employee.Employee)
                .ToList();
        }
        public Blog Get(long id)
        {
            return _DataContext.Blogs
                  .FirstOrDefault(e => e.BlogId == id);
        }
        public void Add(Blog entity)
        {
            _DataContext.Blogs.Add(entity);
            _DataContext.SaveChanges();
        }
        public void Update(Blog blog, Blog entity)
        {
            blog.Titlle = entity.Titlle;
            blog.Description = entity.Description;
            blog.Picture = entity.Picture;
            blog.Type = entity.Type;
            _DataContext.SaveChanges();
        }
        public void Delete(Blog blog)
        {
            _DataContext.Blogs.Remove(blog);
            _DataContext.SaveChanges();
        }
    }
}
