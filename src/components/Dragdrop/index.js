// 拖拽 ： 用于dom的拖拽处理
import $ from "jquery"
class DragDrop {
  constructor(opts = {}) {
    this.opts = opts
    this.initDrag()
    this.initDrop()
  }

  handleDragStart(e) {
    if (this.opts.drag.onStart) {
      e.originalEvent.dataTransfer.effectAllowed = "move"
      this.opts.drag.onStart(e.originalEvent, e.currentTarget)
    }
  }

  initDrag() {
    let { elem, parentSelector } = this.opts.drag
    this.elemDrag = null
    if (parentSelector) {
      this.elemDrag = $(document.body)
      this.elemDrag.on("dragstart", `${parentSelector} ${elem}`, this.handleDragStart.bind(this))
    } else {
      this.elemDrag = $(elem)
      this.elemDrag.on("dragstart", this.handleDragStart.bind(this))
    }
  }

  initDrop() {
    let { elem } = this.opts.drop
    this.elemDrop = $(elem)
    this.elemDrop.on('dragover', (e) => {
      let event = e.originalEvent
      event.preventDefault()  // 需要在dragover 的时候阻止默认事件
      event.dataTransfer.dropEffect = 'move'
    })
      .on("drop", (e) => {
        let event = e.originalEvent
        let text = event.dataTransfer.getData("Text")
        this.opts.drop.onDrop(event, text)
      })
  }

  destory() {
    this.elemDrag.off("dragstart")
    this.elemDrop.off("drag")
  }
}
export default DragDrop