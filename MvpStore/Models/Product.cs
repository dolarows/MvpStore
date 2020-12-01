using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MvpStore.Models
{
    public partial class Product
    {
        public Product()
        {
            Sales = new HashSet<Sales>();
        }

        public int Id { get; set; }

        [StringLength(50), MinLength(3)]
        [Required(ErrorMessage = "Product Name is required")]
        public string Name { get; set; }

        [DataType(DataType.Currency)]
        [Required(ErrorMessage = "Price is required")]
        public decimal Price { get; set; }

        public virtual ICollection<Sales> Sales { get; set; }
    }
}
