using Microsoft.AspNetCore.Mvc;

namespace microservice_api.Controllers
{
    [ApiController]
    [Route("news")]
    public class NewsSearchController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {

            return new JsonResult("");
        }
    }
}
