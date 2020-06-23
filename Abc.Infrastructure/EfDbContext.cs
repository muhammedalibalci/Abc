using Abc.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Infrastructure
{
    public class EfDbContext : DbContext
    {
        public EfDbContext(DbContextOptions<EfDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>()
                .HasOne(x => x.User)
                .WithMany(x => x.Posts);

            modelBuilder.Entity<Post>()
               .HasOne(x => x.Category)
               .WithMany(x => x.Posts);

        }
        public DbSet<User> Users { get; set; }
    }
}
