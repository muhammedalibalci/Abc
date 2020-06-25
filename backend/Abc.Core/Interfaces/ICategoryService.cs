using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface ICategoryService
    {
        Task<IReadOnlyList<Category>> GetAll();

    }
}
