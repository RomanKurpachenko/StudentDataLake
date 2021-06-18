using Microsoft.EntityFrameworkCore;
using StudentDataLake.Common.Entity;
using StudentDataLake.Common.Entity.Assessments;
using StudentDataLake.Common.Entity.Students;

namespace StudentDataLake.Infrastructure.Databases
{
    public class StudentDataLakeContext : DbContext
    {
        public StudentDataLakeContext(DbContextOptions<StudentDataLakeContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseLazyLoadingProxies();
        //}

        #region Assessments

        public DbSet<CheckList> CheckLists { get; set; }

        public DbSet<CheckPoint> CheckPoints { get; set; }

        #endregion

        #region Students

        public DbSet<Student> Students { get; set; }

        public DbSet<StudentCheckPoint> StudentsCheckPoints { get; set; }

        public DbSet<StudentStageInfo> StudentsStageInfo { get; set; }

        #endregion

        public DbSet<Role> Roles { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<UserRole> UsersRoles { get; set; }
    }
}
