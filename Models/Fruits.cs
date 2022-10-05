using System;
using System.Collections.Generic;

namespace FruitSellerApp.Models
{
    public partial class Fruits
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public double ItemPrice { get; set; }
        public int ItemStock { get; set; }
        public string ItemImage { get; set; }
    }
}
