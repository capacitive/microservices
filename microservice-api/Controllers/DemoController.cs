using microservice_api.Utilities;
using Microsoft.AspNetCore.Mvc;

namespace microservice_api.Controllers
{
    [ApiController]
    [Route("demo")]
    [Route("demo2")]
    [Produces("application/json")]
    public class DemoController : ControllerBase
    {
        /// <summary>
        /// Demo for memoization
        /// </summary>
        /// <returns></returns>
        /// <response code="201">Returns memoized test values along with benchmark data.</response>
        /// <response code="400">If benchmark data cannot be gathered.</response>
        [HttpGet]
        public String Get()
        {
            var numbers = Enumerable.Range(1, 10);
            //var timeNorm = Measures.CalculateTimeSpent(() => numbers.Select(Maths.square).ToList());
            //var timeSlow = Measures.CalculateTimeSpent(() => numbers.Select(Maths.slowSquare).ToList());

            var memoizedSlow = Maths.slowSquare.Memoize();
            var timeMemoized1 = Measures.CalculateTimeSpent(() => numbers.Select(memoizedSlow).ToList());
            var timeMemoized2 = Measures.CalculateTimeSpent(() => numbers.Select(memoizedSlow).ToList());

            return $"square() [memoi 1]- {timeMemoized1} [memoi 2]- {timeMemoized2}";
        }
    }
}
