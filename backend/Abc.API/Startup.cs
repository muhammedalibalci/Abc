using Abc.API.Extensions;
using Abc.Core.Interfaces;
using Abc.Core.Services;
using Abc.Infrastructure;
using Abc.Infrastructure.Data;
using AutoMapper;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace Abc.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers()
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            services.AddIdentityServices(Configuration);

            services.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin",
                    builder => builder.AllowAnyOrigin());
            });


            services.AddDbContext<EfDbContext>(options =>
                    options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"), options =>
                    {
                        options.SetPostgresVersion(new Version("9.6"));
                        options.MigrationsAssembly("Abc.API");
                    }));

            services.AddAutoMapper(typeof(Startup));

            services.AddSingleton(typeof(IRepository<>), typeof(EfRepository<>));

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            //Services
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<ICartItemService, CartItemService>();
            services.AddScoped<ICategoryService, CategoryService>();


        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseMiddleware<ErrorWrappingMiddleware>();

            app.UseHttpsRedirection();

            app.UseRouting();


            app.UseCors(options =>
            {
                options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });

            app.UseAuthorization();

            app.UseAuthentication();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
