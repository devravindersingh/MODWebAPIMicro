using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ModelLibrary;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace StudentLibrary
{
    public class StudentContext : IdentityDbContext
    {
        public StudentContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /*base.OnModelCreating(modelBuilder);*/
            modelBuilder.Entity<IdentityRole>(r => r.HasData(new IdentityRole
            {
                Id = "1",
                Name = "Admin",
                NormalizedName = "Admin"
            },
            new IdentityRole
            {
                Id = "2",
                Name = "Mentor",
                NormalizedName = "Mentor"

            },
            new IdentityRole
            {
                Id = "3",
                Name = "Student",
                NormalizedName = "Student"
            }
            ));

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<UserMod> MoDUsers { get; set; }
        public DbSet<Technology> Technologies { get; set; }

        public DbSet<Course> Courses { get; set; }

        public DbSet<Payment> PaymentDBs { get; set; }
        public DbSet<TempTransactionalDB> TempTransactionalDBs { get; set; }


    }

}
