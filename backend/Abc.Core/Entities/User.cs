using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Abc.Core.Entities
{
    public class User : IdentityUser 
    {
        public string Name { get; set; }
        public string LastName { get; set; }

        public List<Address> Addresses { get; set; }
        public List<Order> Orders { get; set; }
       
        public List<CartItem> CartItems { get; set; }
    }
}
