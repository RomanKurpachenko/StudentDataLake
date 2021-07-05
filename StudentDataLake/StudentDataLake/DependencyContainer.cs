using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StudentDataLake.Infrastructure.Databases;
using StudentDataLake.Infrastructure.Services.Students;

namespace StudentDataLake
{
    public static class DependencyContainer
    {
        public static void RegistrationOfDependency(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<StudentDataLakeContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DbConnection"),
                    builder => builder.EnableRetryOnFailure()));

            #region Services

            services.AddTransient<IStudentService, StudentService>();

            #endregion
        }
    }
}
