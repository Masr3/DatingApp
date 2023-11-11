using API.Extensions;
using API.Interfaces;
using API.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<ITokenService,TokenService>();

builder.Services.AddControllers();

builder.Services.AddAplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddCors();


var app = builder.Build();


app.UseCors(builder=> builder.AllowAnyHeader().AllowAnyMethod()
.WithOrigins("http://localhost:4200"));


// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
