using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Infrastructure
{
    public class EfRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly EfDbContext _dbContext;

        private readonly DbSet<TEntity> _dbSet;
        public EfRepository(EfDbContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = dbContext.Set<TEntity>();

        }
        public TEntity GetById(int id)
        {
            return _dbSet.SingleOrDefault(e => e.Id == id);
        }
        public Task<TEntity> GetByIdAsync(int id)
        {
            return _dbSet.SingleOrDefaultAsync(e => e.Id == id);
        }
       
        public Task<List<TEntity>> ListAsync()
        {
            return _dbSet.ToListAsync();
        }
        public async Task<TEntity> AddAsync(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }
        public async Task UpdateAsync(TEntity entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsyncTEntity(TEntity entity)
        {
            _dbSet.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            _dbSet.Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public Task<TEntity> GetByWhereAsync()
        {
            throw new NotImplementedException();
        }
    }
}
