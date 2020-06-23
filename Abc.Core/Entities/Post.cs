using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Abc.Core.Entities
{
    [Table("Post")]
    public class Post : BaseEntity
    {
        public string Content { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public DateTime CreatedDate { get; set; }
        public int? CategoryId { get; set; }
        public Category Category { get; set; }
        public string? UserId { get; set; }
        public User User { get; set; }
    }
}
