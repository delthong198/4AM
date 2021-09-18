using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class EmployeeContext :DbContext
    {
        public EmployeeContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Roles>().HasKey(s => s.RoleId);
            modelBuilder.Entity<EmployeeRole>().HasKey(s =>
               new {
                   s.EmployeeId,
                   s.RoleId
               });
            ///one-many employee-blog
            modelBuilder.Entity<Blog>()
                .HasOne(s => s.Employee)
                .WithMany(s => s.Blogs)
                .HasForeignKey(s => s.EmployeeId)
                .OnDelete(DeleteBehavior.Restrict);

            //relationship table employee,role,employeerole
            modelBuilder.Entity<EmployeeRole>()
              .HasOne<Employee>(sc => sc.Employee)
              .WithMany(s => s.EmployeeRoles)
              .HasForeignKey(sc => sc.EmployeeId);

            modelBuilder.Entity<EmployeeRole>()
                .HasOne<Roles>(sc => sc.Roles)
                .WithMany(s => s.EmployeeRoles)
                .HasForeignKey(sc => sc.RoleId);

        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<EmployeeRole> EmployeeRoles { get; set; }
        public DbSet<Roles>Roles { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<Schedule> Schedules { get; set; }

    }
}
