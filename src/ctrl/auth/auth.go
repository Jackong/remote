/**
 * User: Jackong
 * Date: 13-7-21
 * Time: 下午4:36
 */
package auth

import (
	"github.com/Jackong/web/ctrl"
	"github.com/Jackong/web/mapper"
	"github.com/Jackong/web/io"
	"github.com/Jackong/web/common/log"

	"service"
)

const (
	RE_EMAIL = `(?i)[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}`
	RE_PASSWORD = `[0-9a-f]{32}`
)

type auth struct {
	ctrl.Ctrl
	service.Auth
}

func init() {
	mapper.Set("/auth", &auth{})
}

func (this *auth) Create(ctx *io.Context) {
	email := ctx.Input.Pattern("email", RE_EMAIL)
	log.Debug(email)
	password := ctx.Input.Pattern("password", RE_PASSWORD)
	log.Debug(password)
	ok := this.SignUp(email, password)
	if ok {
		ok = this.SignIn(email, password)
	}
	ctx.Output.Set("ok", ok)
}

func (this *auth) Update(ctx *io.Context) {
	email := ctx.Input.Pattern("email", RE_EMAIL)
	password := ctx.Input.Pattern("password", RE_PASSWORD)
	ok := this.SignIn(email, password)
	ctx.Output.Set("ok", ok)
}
