using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface IOrderService
    {
        Task<Order> Add(string userId, int addressId);
    }
}
