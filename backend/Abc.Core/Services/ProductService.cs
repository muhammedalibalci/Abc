using Abc.Core.Data;
using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace Abc.Core.Services
{
    public class ProductService : IProductService
    {
        private IUnitOfWork _unitOfWork;
        private IProductRepository<Product> _productRepository;
        public ProductService(IUnitOfWork unitOfWork, IProductRepository<Product> productRepository)
        {
            _unitOfWork = unitOfWork;
            _productRepository = productRepository;
        }
      
        public async Task<Product> Get(int id)
        {
            ProductSpecification spec = new ProductSpecification(id);

            return await _unitOfWork.Repository<Product>().GetEntityWithSpec(spec);

        }

        public async  Task<IQueryable<Product>> GetAll(int id,ProductFilter filter)
        {
            if (String.IsNullOrEmpty(filter.Color) && String.IsNullOrEmpty(filter.Size))
            {
                return _productRepository.GetAll(id);
            }
            var query = _unitOfWork.Repository<Product>().GetTable(new Product());
            var productDetailTable =  _unitOfWork.Repository<ProductDetail>().GetTable(new ProductDetail());

            query = from o in query
                    where o.CategoryId == id
                    select o;

            if (filter.Color == "all")
                filter.Color = null;

            if (filter.Size == "all")
                filter.Size = null;

            var products = _productRepository.GetAll(id);

            

            if (!String.IsNullOrEmpty(filter.Color))
            {
                products = from p in products
                        join oi in productDetailTable on p.Id equals oi.ProductId
                        where oi.Color == filter.Color
                        select p;
            }

            if (!String.IsNullOrEmpty(filter.Size))
            {
                products = from p in products
                        join oi in productDetailTable on p.Id equals oi.ProductId
                        where oi.Size == filter.Size
                        select p;
            }

            return products;
        }

        public async Task<IReadOnlyList<ProductDetail>> GetAllProductDetailsByCategoryId(int categoryId)
        {
            ProductDetailSpecification spec = new ProductDetailSpecification(categoryId);

            var data = await _unitOfWork.Repository<ProductDetail>().ListAsync(spec);

            return data;
        }
        public  Task<Product> Add(Product post)
        {
            return _unitOfWork.Repository<Product>().Add(post);
        }

        public async Task<Product> Delete(int id)
        {
            Product product = await Get(id);

            if (product == null)
                return null;

            return await _unitOfWork.Repository<Product>().Delete(product);
        }

        public async Task<Product> Update(Product post)
        {
            var result =  await _unitOfWork.Repository<Product>().Update(post);
            await _unitOfWork.Complete();
            return result;
        }

        
    }
}
