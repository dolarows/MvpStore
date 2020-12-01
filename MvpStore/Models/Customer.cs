using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MvpStore.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }

        [StringLength(50), MinLength(3)]
        [Required(ErrorMessage = "Customer Name is required")]
        public string Name { get; set; }

        [StringLength(50), MinLength(3)]
        [Required(ErrorMessage = "Customer Address is required")]
        public string Address { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
