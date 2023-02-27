using System.Collections.Concurrent;
using System.Diagnostics;

namespace microservice_api.Utilities
{
    public static class Maths
    {
        public static readonly Func<int, int> square = n => n * n;

        public static readonly Func<int, int> slowSquare = n =>
        {
            Thread.Sleep(1000);
            return n * n;
        };
    }

    public static class Measures
    {
        public static TimeSpan CalculateTimeSpent(Action action)
        {
            var sw = new Stopwatch();
            sw.Start();

            action();

            sw.Stop();
            return sw.Elapsed;
        }
    }

    public static class Performance 
    {
        public static Func<T, TResult> Memoize<T, TResult>(this Func<T, TResult> f)
        {
            var cache = new ConcurrentDictionary<T, TResult>();
            return a => cache.GetOrAdd(a, f);
        }
    }
}
