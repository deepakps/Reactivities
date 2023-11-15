using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        #region Constructors
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        #endregion

        #region Public Members
        public DbSet<Activity> Activities { get; set; }
        #endregion
    }
}