using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Infrastructure.Data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EfDbContext _context;

        public UnitOfWork(EfDbContext context)
        {
            _context = context;
        }

        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        { 

            return new EfRepository<TEntity>(_context);
        }

      
    }
}
