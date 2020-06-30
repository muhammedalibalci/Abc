using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Text;

namespace Abc.Core.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price{ get; set; }
        public string ImageUrl { get; set; }
        public int? CategoryId{ get; set; }
        public Category Category { get; set; }
        public virtual ICollection<ProductDetail> ProductDetails { get; set; }

    }
}
