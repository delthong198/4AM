﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UltimateNeverBug.Models
{
    public class Schedule
    {
        public long ScheduleId { get; set; }
        public string Descrpition { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime EndDate { get; set; }
        public long UserId { get; set; }
    }
}
