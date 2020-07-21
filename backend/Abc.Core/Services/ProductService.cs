﻿using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Services
{
    public class ProductService : IProductService
    {
        private IUnitOfWork _unitOfWork;
        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
      
        public async Task<Product> Get(int id)
        {
            ProductSpecification spec = new ProductSpecification(id);

            return await _unitOfWork.Repository<Product>().GetEntityWithSpec(spec);

        }

        public async Task<IReadOnlyList<Product>> GetAll(int id)
        {
            ProductSpecParams ProductSpecParams = new ProductSpecParams();

            var spec = new ProductSpecification(ProductSpecParams,id);

            var data = await _unitOfWork.Repository<Product>().ListAsync(spec);
           
            return data;
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
