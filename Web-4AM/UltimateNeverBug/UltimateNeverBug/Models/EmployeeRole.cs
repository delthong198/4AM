using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class EmployeeRole
    {
        public long EmployeeId { get; set; }
        public long RoleId { get; set; }
        public Employee Employee { get; set; }
        public Roles Roles { get; set; }
    }
}
