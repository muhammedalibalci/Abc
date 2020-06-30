using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Abc.Core.Entities
{
    public class Order : BaseEntity
    {
        public string Status { get; set; }
        public int Amount { get; set; }
        public DateTime CreatedDate { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public int? AddressId { get; set; }
        public Address Address  { get; set; }

        public List<OrderItem> OrderItems { get; set; }
    }
}
