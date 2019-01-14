import _ from "lodash";
import $ from "jquery";
import "./index.css";
const defaults = {
  widget_selector: ".dragger",
  draggable: {
    // onResize: datas => {
    //   console.log(datas);
    // },
    // onStop: () => {}
  },
  resizeable: {
    // onStart: () => {},
    // onDrag: datas => {
    //   console.log(datas);
    // },
    // onStop: () => {}
  }
};

class Draggle {
  constructor(el, options) {
    this.options = _.merge({}, defaults, options);
    this.$document = $(document);
    this.$container = $(el); // 容器
    this.$player = null; // 选中组件
    this.isMoving = false;
    this.$widgets = this.$container.children(this.options.widget_selector);
    this.$resHandles = this.$container.children(this.options.resizeable.hanle);
    this.initDraggle();
  }

  // 初始化拖拽环境
  initDraggle() {
    this.$document.on("mousemove", e => {
      if (this.isMoving) {
        const posix = !this.$player ? { x: 0, y: 0 } : this.getWidgetOffset(e);
        this.dragging(posix);
      }
    });
    this.$document.on("mouseup", e => {
      if (this.isMoving) {
        this.isMoving = false;
        this.$player = null;
        const posix = this.getWidgetOffset(e);
        this.dragStop(posix);
      }
    });

    this.$widgets.on("mousedown", e => {
      // 这里用箭头函数避免this指向被替换（this始终保持指向Draggle实例）
      this.$player = $(e.currentTarget);
      this.el_init_pos = this.get_actual_pos(this.$player);
      this.mouse_init_pos = this.get_mouse_pos(e);
      this.offset_pos = {
        x: this.mouse_init_pos.left - this.el_init_pos.left,
        y: this.mouse_init_pos.top - this.el_init_pos.top
      };
      this.isMoving = true;
      this.dragStart();
    });

    this.$resHandles.on("mousedown", e => {
      e.stopPropagation();
    });
  }
  // 拖拽开始
  dragStart() {
    if (this.$player === null) {
      return false;
    }
    this.set_limits();
    if (this.options.draggable.onStart) {
      this.options.draggable.onStart.call(this);
    }
  }
  // 拖拽中
  dragging(pos) {
    if (this.$player === null) {
      return false;
    }
    if (this.options.draggable.onDrag) {
      this.options.draggable.onDrag.call(this, pos);
    }
    this.$player.css({
      top: pos.y,
      left: pos.x
    });
  }
  // 拖拽结束
  dragStop(pos) {
    if (this.options.draggable.onStop) {
      this.options.draggable.onStop.call(this, pos);
    }
  }

  // 获取组件的相对容器位置
  getWidgetOffset(e) {
    let x = e.clientX - this.offset_pos.x - this.$container.offset().left;
    let y = e.clientY - this.offset_pos.y - this.$container.offset().top;
    if (x > this.player_max_left) {
      x = this.player_max_left;
    } else if (x <= 0) {
      x = 0;
    }
    if (y > this.player_max_top) {
      y = this.player_max_top;
    } else if (y <= 0) {
      y = 0;
    }

    return { x, y };
  }

  // 获取鼠标位置
  get_mouse_pos(e) {
    if (e.originalEvent && e.originalEvent.touches) {
      var oe = e.originalEvent;
      e = oe.touches.length ? oe.touches[0] : oe.changedTouches[0];
    }
    return {
      left: e.clientX,
      top: e.clientY
    };
  }
  // 获取当前组件位置
  get_actual_pos($el) {
    return $el.offset();
  }

  // 设置移动范围
  set_limits() {
    const player_width = this.$player.width();
    const player_height = this.$player.height();
    const container_width = this.$container.width();
    const container_height = this.$container.height();
    this.player_max_left = container_width - player_width;
    this.player_max_top = container_height - player_height;
  }
}
export default Draggle;
