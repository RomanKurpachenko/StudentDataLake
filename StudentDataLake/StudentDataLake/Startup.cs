using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using StudentDataLake.Infrastructure.Databases;
using StudentDataLake.Infrastructure.Services.CheckLists;
using StudentDataLake.Infrastructure.Services.Students;

namespace StudentDataLake
{
    public class Startup
    {
        public IWebHostEnvironment Environment { get; }

        public IConfiguration Configuration { get; }

        private readonly string JSClientName = "StudentDataLakeClient";

        public Startup(
            IWebHostEnvironment environment,
            IConfiguration configuration)
        {
            Environment = environment;
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<StudentDataLakeContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DbConnection")));

            services.AddTransient<IStudentService, StudentService>();

            services.AddTransient<ICheckListService, CheckListService>();

            services
                .AddControllers()
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                });

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = $"{JSClientName}/dist";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");

                app.UseSpaStaticFiles();
            }

            app.UseHttpsRedirection();

            //app.UseCors("CorsPolicy");

            app.UseCors(options =>
            {
                options.AllowAnyOrigin();
                options.AllowAnyHeader();
                options.AllowAnyMethod();
            });

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.UseRouting();

            app
                .UseEndpoints(endpoints =>
                {
                    endpoints
                    .MapDefaultControllerRoute()
                    .RequireAuthorization();
                });
                //.UseSpa(spa =>
                //{
                //    spa.Options.SourcePath = $"{JSClientName}";

                //    if (Environment.IsDevelopment())
                //    {
                //        spa.UseAngularCliServer(npmScript: "start");
                //    }
                //});
        }
    }
}
