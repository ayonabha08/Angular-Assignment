using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FruitSellerApp.Models
{
    public partial class AYONABHA_DBContext : DbContext
    {
        public AYONABHA_DBContext()
        {
        }

        public AYONABHA_DBContext(DbContextOptions<AYONABHA_DBContext> options)
            : base(options)
        {
        }
                
        public virtual DbSet<Fruits> Fruits { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=W-H44PY03-0;Database=AYONABHA_DB;User id=sa;Password=admin");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            modelBuilder.Entity<Fruits>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PK__Fruits__727E838BE3133C9D");
            });

            

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
