using Abc.Core.Entities;
using Abc.Core.Interfaces;
using Abc.Core.Specifications;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Services
{
    public class PostService : IPostService
    {
        private IUnitOfWork _unitOfWork;
        public PostService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

      
        public async Task<Post> Get(int id)
        {
            return await _unitOfWork.Repository<Post>().GetByIdAsync(id);
        }

        public async Task<IReadOnlyList<Post>> GetAll()
        {
            PostSpecParams postSpecParams = new PostSpecParams();
            var spec = new PostSpecification(postSpecParams);
            var data = await _unitOfWork.Repository<Post>().ListAsync(spec);
           
            return data;
        }
        public  Task<Post> Add(Post post)
        {
            return _unitOfWork.Repository<Post>().Add(post);
        }

        public async Task<Post> Delete(int id)
        {


            Post post = await Get(id);

            if (post == null)
                return null;

            return await _unitOfWork.Repository<Post>().Delete(post);
        }

        public async Task<Post> Update(Post post)
        {
            return await _unitOfWork.Repository<Post>().Update(post);
        }
    }
}
