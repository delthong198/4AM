using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class Roles
    {
        public long RoleId { get; set; }
        public string RoleName { get; set; }
        public virtual ICollection<EmployeeRole> EmployeeRoles { get; set; }
    }
}
