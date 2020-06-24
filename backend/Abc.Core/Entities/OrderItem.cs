using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Entities
{
    public class OrderItem : BaseEntity
    {
        public int Quantity { get; set; }
        public int? OrderId { get; set; }
        public Order Order { get; set; }
        public int? ProductDetailId { get; set; }
        public ProductDetail ProductDetail { get; set; }
    }
}
