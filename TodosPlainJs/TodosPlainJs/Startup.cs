using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TodosPlainJs.Startup))]
namespace TodosPlainJs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
