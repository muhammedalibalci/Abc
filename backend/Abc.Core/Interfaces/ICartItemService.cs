using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface ICartItemService
    {
        Task<bool> Insert(CartItem cartItem, string userId);

    }
}
