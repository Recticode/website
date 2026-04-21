import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

const redis = Redis.fromEnv()

export const challengeLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "5 m"),
    analytics: true,
})