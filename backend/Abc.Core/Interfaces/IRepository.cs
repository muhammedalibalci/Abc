using Abc.Core.Entities;
using Abc.Core.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<T> GetSpecByIdAsync(Expression<Func<T, bool>> predicate);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> GetEntityWithSpec(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
        Task<int> CounAsync(ISpecification<T> spec);

        Task<T> Add(T entity);
        Task<T> Delete(T  entity);
        Task<T> Update(T entity);

        IQueryable<T> GetTable(T entity);
    }
}
