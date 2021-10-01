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
        readonly UserContext _UserContext;
        public BlogManager(UserContext context)
        {
            _UserContext = context;
        }
        public IEnumerable<Blog> GetAll()
        {
            return _UserContext.Blogs
                //.Include (employee =>employee.Employee)
                .ToList();
        }
        public Blog Get(long id)
        {
            return _UserContext.Blogs
                  .FirstOrDefault(e => e.BlogID == id);
        }
        public void Add(Blog entity)
        {
            _UserContext.Blogs.Add(entity);
            _UserContext.SaveChanges();
        }
        public void Update(Blog blog, Blog entity)
        {
            blog.Titlle = entity.Titlle;
            blog.Desciprtion = entity.Desciprtion;
            blog.Picture = entity.Picture;
            blog.Type = entity.Type;
            _UserContext.SaveChanges();
        }
        public void Delete(Blog blog)
        {
            _UserContext.Blogs.Remove(blog);
            _UserContext.SaveChanges();
        }
    }
}
