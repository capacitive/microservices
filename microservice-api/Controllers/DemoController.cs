using Microsoft.AspNetCore.Mvc;

namespace microservice_api.Controllers
{
    [ApiController]
    [Route("demo")]
    public class DemoController : ControllerBase
    {
        [HttpGet]
        public String Get()
        {
            return "Howdy partner!";
        }
    }
}
