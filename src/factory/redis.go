/**
 * User: Jackong
 * Date: 13-9-1
 * Time: 下午5:57
 */
package factory

import (
	"github.com/simonz05/godis/redis"
)

var (
	RedisPipe *redis.PipeClient
	Redis *redis.Client
)

func init() {
	RedisPipe = redis.NewPipeClient("", 0, "")
	Redis = redis.New("", 0, "")
}
