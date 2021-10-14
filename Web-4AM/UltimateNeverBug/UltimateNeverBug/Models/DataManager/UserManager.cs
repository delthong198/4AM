using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UltimateNeverBug.Models.Repository;

namespace UltimateNeverBug.Models.DataManager
{
    public class UserManager : IDataRepository<User>
    {
        readonly DataContext _DataContext;
        public UserManager(DataContext context)
        {
            _DataContext = context;
        }
        public IEnumerable<User> GetAll()
        {
            return _DataContext.Users
                //.Include(blog =>blog.Blogs)
                //.Include(erole =>erole.UserRoles)
                .ToList();
        }
        public User Get(long id)
        {
            var User = _DataContext.Users
                  .FirstOrDefault(e => e.UserId == id);
            //if(User == null)
            //{
            //    return null;
            //}
            //_DataContext.Entry(User)
            //    .Collection(b => b.Blogs)
            //    .Load();
            return User;
        }
        public void Add(User entity)
        {
            _DataContext.Users.Add(entity);
            _DataContext.SaveChanges();
        }
        public void Update(User User, User entity)
        {
            User.Name = entity.Name;
            User.Password = entity.Password;
            User.Email = entity.Email;
            User.DateOfBirth = entity.DateOfBirth;
            User.PhoneNumber = entity.PhoneNumber;
            _DataContext.SaveChanges();
        }
        public void Delete(User User)
        {
            _DataContext.Users.Remove(User);
            _DataContext.SaveChanges();
        }
    }
}
