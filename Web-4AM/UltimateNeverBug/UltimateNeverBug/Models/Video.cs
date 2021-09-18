using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class Video
    {
        public long VideoId { get; set; }
        public string Type { get; set; }
        public DateTime CreateDate { get; set; }
        public string Titlle { get; set; }
        public string Desciprtion { get; set; }
        public long EmployeeId { get; set; }
    }
}
