/**
 * User: Jackong
 * Date: 13-9-1
 * Time: 下午4:05
 */
package index

import (
	"github.com/Jackong/web/ctrl"
	"github.com/Jackong/web/mapper"
	"github.com/Jackong/web/io"
)

type index struct {
	ctrl.Ctrl
}

func init() {
	mapper.Set("/", &index{})
}

func (this *index) Read(ctx *io.Context) {
	ctx.Output.Set("index", "{}");
}
