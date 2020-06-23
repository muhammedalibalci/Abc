using Abc.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Abc.Core.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
