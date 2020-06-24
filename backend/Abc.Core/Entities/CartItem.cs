using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Entities
{
    public class CartItem : BaseEntity
    {
        public int Quantity { get; set; }

        public string? UserId { get; set; }
        public User User { get; set; }
        public int? ProductDetailId { get; set; }
        public ProductDetail ProductDetail { get; set; }


    }
}
