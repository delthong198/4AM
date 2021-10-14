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
        public long BlogId { get; set; }
        public string Titlle { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }
        public string Type { get; set; }
        public long UserId { get; set; }
        //public User User { get; set; }
    }
}
