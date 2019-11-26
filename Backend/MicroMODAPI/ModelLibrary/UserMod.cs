using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace ModelLibrary
{
    public class UserMod : IdentityUser
    {
        public string FirstName { get; set; }
        public string Skill { get; set; }
        public string Experience { get; set; }
        public string Timing { get; set; }
        public string LastName { get; set; }

        public bool IsActive { get; set; }

    }
}
