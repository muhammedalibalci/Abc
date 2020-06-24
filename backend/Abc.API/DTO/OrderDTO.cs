using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Abc.API.DTO
{
    public class OrderDTO
    {
        public int CartId { get; set; }
        public Address Address { get; set; }
    }
}
