using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Abc.Infrastructure
{
    public class ProductRepository : EfRepository<Product>,IProductRepository<Product> 
    {
        private EfDbContext _context;
        public ProductRepository(EfDbContext context) :base(context)
        {
            _context = context;
        }

        public IQueryable<Product> GetAll(int categoryId)
        {
            return _context.Products
                          .Include(o => o.ProductDetails)
                          .Where(o => o.CategoryId == categoryId)
                          .AsQueryable();
        }
    }
}
