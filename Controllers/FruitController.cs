using FruitSellerApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FruitSellerApp.Controllers
{
    [ApiController]
    public class FruitController : ControllerBase
    {
        public AYONABHA_DBContext _context = null;
        public FruitController(AYONABHA_DBContext context)
        {
            _context = context;
        }
        [Route("Fruits/All")]
        public List<Fruits> GetAll() => _context.Fruits.ToList();

        [Route("Fruits/{id}")]
        public Fruits Getfr(int id) => _context.Fruits.FirstOrDefault((e) => e.ItemId == id);



        [Route("Fruits")]
        [HttpPost]
        public string AddNew(Fruits fr)
        {
            _context.Fruits.Add(fr);
            _context.SaveChanges();
            return "Item Added to the Server";
        }




        [Route("Fruits")]
        [HttpPut]
        public string Update(Fruits fr)
        {
            var selected = _context.Fruits.FirstOrDefault((e) => e.ItemId == fr.ItemId);
            if (selected == null) return "Item Not Found to Update ";
            selected.ItemName = fr.ItemName;
            selected.ItemPrice = fr.ItemPrice;
            selected.ItemStock = fr.ItemStock;
            selected.ItemImage = fr.ItemImage;
            _context.SaveChanges();
            return "Item updated in the Server";
        }



        [Route("Fruits/{id}")]
        [HttpDelete]



        public string Delete(int id)
        {
            var foundRec = _context.Fruits.FirstOrDefault((e) => e.ItemId == id);
            if (foundRec == null) return "No Records Found";
            _context.Fruits.Remove(foundRec);
            _context.SaveChanges();
            return "Data is Deleted";
        }


    }
}
