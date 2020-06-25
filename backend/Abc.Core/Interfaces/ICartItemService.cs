﻿using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Abc.Core.Interfaces
{
    public interface ICartItemService
    {

        Task<IReadOnlyList<CartItem>> GetAll(string userId);
        Task<CartItem> Insert(CartItem cartItem, string userId);

    }
}
