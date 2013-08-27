/**
 * User: Jackong
 * Date: 13-7-21
 * Time: 下午4:36
 */
package user

import (
	"github.com/Jackong/web/ctrl"
	"github.com/Jackong/web/mapper"
	"github.com/Jackong/web/io"
	"github.com/Jackong/web/common/log"
)

const (
	RE_EMAIL = `(?i)[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}`
	RE_PASSWORD = `[0-9a-f]{32}`
)

type user struct {
	ctrl.Ctrl
}

func init() {
	mapper.Set("/user", &user{})
}

func (this *user) Create(ctx *io.Context) {
	email := ctx.Input.Required("params")
	log.Debug(email)
	password := ctx.Input.Pattern("password", RE_PASSWORD)
	log.Debug(password)
	ctx.Output.Set("res", struct{Code int; Msg string}{Code: 0, Msg: "success"})
}
