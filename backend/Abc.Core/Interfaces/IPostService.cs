using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface IPostService
    {
        Task<IReadOnlyList<Post>> GetAll();
        Task<Post> Get(int id);
        Task<Post> Add(Post post);
        Task<Post> Delete(int id);
        Task<Post> Update(Post post);
    }
}
