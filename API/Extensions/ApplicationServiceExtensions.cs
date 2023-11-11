using System.Reflection.Metadata.Ecma335;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddAplicationServices(this IServiceCollection services,
         IConfiguration config) 
        {
            services.AddDbContext<DataContext>(opt=> opt.UseSqlite(config
                                                    .GetConnectionString("DefaultConnection")));

            return services;
        }


    }
}