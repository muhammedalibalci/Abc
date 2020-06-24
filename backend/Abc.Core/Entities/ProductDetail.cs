using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Entities
{
    public class ProductDetail : BaseEntity
    {
        public string Size { get; set; }
        public string Color { get; set; }
        public int? ProductId { get; set; }
        public Product Product { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        public List<CartItem> CartItems { get; set; }
    }
}
