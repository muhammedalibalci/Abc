using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Abc.Core.Entities
{
    [Table("Category")]
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
    }
}
