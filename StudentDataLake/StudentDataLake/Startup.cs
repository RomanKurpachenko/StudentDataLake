using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using StudentDataLake.SignalR.Checklist;
using StudentDataLake.SignalR.CheckPoints;
using StudentDataLake.SignalR.Students;

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
            services.RegistrationOfDependency(Configuration);

            services.AddAutoMapper(typeof(AutoMapperProfile));

            services
                .AddControllers()
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                });

            services.AddSignalR();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = $"{JSClientName}/dist";
            });
        }

        public void Configure(IApplicationBuilder app)
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
                    endpoints.MapHub<StudentSyncHub>("/hub/students");

                    endpoints.MapHub<CheckListSyncHub>("/hub/checkList");

                    endpoints.MapHub<CheckPointSyncHub>("/hub/checkPoint");

                    endpoints.MapDefaultControllerRoute();
                })
                .UseSpa(spa =>
                {
                    spa.Options.SourcePath = $"{JSClientName}";

                    if (Environment.IsDevelopment())
                    {
                        spa.UseAngularCliServer(npmScript: "start");
                    }
                });
        }
    }
}
