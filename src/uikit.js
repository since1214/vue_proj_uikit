import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

export default (Vue, options) => {
  Vue.prototype.$ui = {
    alert: UIkit.modal.alert,
    // confirm: UIkit.modal.confirm,
    prompt: UIkit.modal.prompt,
    block: UIkit.modal.block,
    confirm (question, callback, cancelCallback, options) {
      UIkit.confirm(question,
        callback || callback.apply(this),
        cancelCallback || cancelCallback.apply(this),
        options)
    }
  }
}
