/**
 * User: Jackong
 * Date: 13-9-1
 * Time: 下午6:55
 */
package service
import (
	"crypto/md5"
	"encoding/hex"

	"github.com/Jackong/web/common/log"

	"factory"
)

const (
	SALT = `$#d[?{+!eA4*`
)
type Auth struct {

}

func (this *Auth) SignUp(email, password interface {}) (ok bool) {
	elem, err := factory.Redis.Get("auth." + email.(string))
	if err != nil {
		log.Error(err)
		return
	}
	if elem == nil {
		factory.Redis.Set("auth." + email.(string), this.encrypt(email, password))
		ok = true
	}
	return
}

func (this *Auth) SignIn(email, password interface {}) (ok bool) {
	elem, err := factory.Redis.Get("auth." + email.(string))
	if err != nil {
		log.Error(err)
		return
	}

	if elem.String() == this.encrypt(email, password) {
		ok = true
	}
	return
}

func (this *Auth) encrypt(email, password interface {}) string {
	hash := md5.New()
	hash.Write([]byte(email.(string) + password.(string)))
	return hex.EncodeToString(hash.Sum([]byte(SALT)))
}
