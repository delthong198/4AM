using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Role>().HasKey(s => s.RoleId);
            modelBuilder.Entity<UserRole>().HasKey(s =>
               new
               {
                   s.UserId,
                   s.RoleId
               });
            /////one-many employee-blog
            //modelBuilder.Entity<Blog>()
            //    .HasOne(s => s.User)
            //    .WithMany(s => s.Blogs)
            //    .HasForeignKey(s => s.UserId)
            //    .OnDelete(DeleteBehavior.Restrict);

            ////relationship table employee,role,employeerole
            //modelBuilder.Entity<UserRole>()
            //  .HasOne<User>(sc => sc.User)
            //  .WithMany(s => s.UserRoles)
            //  .HasForeignKey(sc => sc.UserId);

            //modelBuilder.Entity<UserRole>()
            //    .HasOne<Role>(sc => sc.Roles)
            //    .WithMany(s => s.UserRoles)
            //    .HasForeignKey(sc => sc.RoleId);

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<Schedule> Schedules { get; set; }

    }
}
