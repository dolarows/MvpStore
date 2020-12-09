﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MvpStore.Models
{
    public partial class Store
    {
        public Store()
        {
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }

        public string Name { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
