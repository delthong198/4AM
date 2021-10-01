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
        readonly UserContext _UserContext;
        public UserManager(UserContext context)
        {
            _UserContext = context;
        }
        public IEnumerable<User> GetAll()
        {
            return _UserContext.Users
                //.Include(blog =>blog.Blogs)
                //.Include(erole =>erole.UserRoles)
                .ToList();
        }
        public User Get(long id)
        {
            var User = _UserContext.Users
                  .FirstOrDefault(e => e.UserId == id);
            //if(User == null)
            //{
            //    return null;
            //}
            //_UserContext.Entry(User)
            //    .Collection(b => b.Blogs)
            //    .Load();
            return User;
        }
        public void Add(User entity)
        {
            _UserContext.Users.Add(entity);
            _UserContext.SaveChanges();
        }
        public void Update(User User, User entity)
        {
            User.Name = entity.Name;
            User.Password = entity.Password;
            User.Email = entity.Email;
            User.DateOfBirth = entity.DateOfBirth;
            User.PhoneNumber = entity.PhoneNumber;
            _UserContext.SaveChanges();
        }
        public void Delete(User User)
        {
            _UserContext.Users.Remove(User);
            _UserContext.SaveChanges();
        }
    }
}
