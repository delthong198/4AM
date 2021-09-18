using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class Blog
    {
        [Key]
        public long BlogID { get; set; }
        public string Titlle { get; set; }
        public string Desciprtion { get; set; }
        public string Picture { get; set; }
        public string Type { get; set; }
        public long EmployeeId { get; set; }
        public Employee Employee { get; set; }
    }
}
