using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Abc.Core.Entities
{
    [Table("User")]
    public class User : IdentityUser 
    {
        public string Name { get; set; }

        public List<Post> Posts { get; set; }
    }
}
