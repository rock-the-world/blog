class redisService {
  constructor(redis) {
    this.redis = redis
  }

  set(key, value) {
    return this.redis.setAsync(key, value).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  setExpire(key, value, expire) {
    return this.redis.setAsync(key, value, 'EX', expire).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  hmset(scope, obj) {
    return this.redis.hmsetAsync(scope, obj).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  get(key) {
    return this.redis.getAsync(key).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  hgetall(scope) {
    return this.redis.hgetallAsync(scope).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  del(key) {
    return this.redis.delAsync(scope).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  publish(channel, msg) {
    return this.redis.publishAsync(channel, msg).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  rpush(channel, msg) {
    return this.redis.rpushAsync(channel, msg).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  lpush(channel, msg) {
    return this.redis.lpushAsync(channel, msg).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  expire(key, seconds) {
    return this.redis.expireAsync(key, seconds).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  zadd(value) {
    return this.redis.zaddAsync(value).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  zrevrange(scope, start, end, withscores) {
    const args = [scope, start, end]
    if (withscores) {
        args.push('withscores')
      }
    return this.redis.zrevrangeAsync(...args).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  zcount(scope) {
    return this.redis.zcardAsync(scope).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }

  exists(key) {
    return this.redis.existsAsync(scope).then((err, data) => {
        if (err) return new Error(err)
        return data
    })
  }
}

module.exports = redisService
