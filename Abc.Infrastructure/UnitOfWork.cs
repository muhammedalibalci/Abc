using Abc.Core.Entities;
using Abc.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EfDbContext _dbContext;

        public UnitOfWork(EfDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public int Complete()
        {
            try
            {
                // Transaction işlemleri burada ele alınabilir veya Identity Map kurumsal tasarım kalıbı kullanılarak
                // sadece değişen alanları güncellemeyide sağlayabiliriz.
                return _dbContext.SaveChanges();
            }
            catch
            {
                // Burada DbEntityValidationException hatalarını handle edebiliriz.
                throw;
            }
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }

        public IRepository<T> GetRepository<T>() where T : BaseEntity
        {
            return new EfRepository<T>(_dbContext);
        }
    }
}
