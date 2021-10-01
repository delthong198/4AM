using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class Role
    {
        public long RoleId { get; set; }
        public string RoleName { get; set; }
        //public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
