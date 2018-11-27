import Vue from 'vue';
import VueToast from './Toast';
import { isObj, isServer } from '../utils';

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
  loadingType: 'circular',
  forbidClick: false,
  overlayStyle: {}
};
const parseOptions = message => isObj(message) ? message : { message };

let queue = [];
let singleton = true;
let currentOptions = { ...defaultOptions };

function createInstance() {
  /* istanbul ignore if */
  if (isServer) {
    return {};
  }

  if (!queue.length || !singleton) {
    const toast = new (Vue.extend(VueToast))({
      el: document.createElement('div')
    });
    document.body.appendChild(toast.$el);
    queue.push(toast);
  }
  return queue[queue.length - 1];
};

// transform toast options to popup props
function transformer(options) {
  options.overlay = options.mask;
  return options;
}

function Toast(options = {}) {
  const toast = createInstance();

  options = {
    ...currentOptions,
    ...parseOptions(options),
    clear() {
      toast.value = false;

      if (!singleton && !isServer) {
        document.body.removeChild(toast.$el);
        toast.$destroy();
      }
    }
  };

  Object.assign(toast, transformer(options));
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
    }, options.duration);
  }

  return toast;
};

const createMethod = type => options => Toast({
  type, ...parseOptions(options)
});

['loading', 'success', 'fail'].forEach(method => {
  Toast[method] = createMethod(method);
});

Toast.clear = all => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear();
      });
      queue = [];
    } else if (singleton) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = options => {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = () => {
  currentOptions = { ...defaultOptions };
};

Toast.allowMultiple = (allow = true) => {
  singleton = !allow;
};

Toast.install = () => {
  Vue.use(VueToast);
};

Vue.prototype.$toast = Toast;

export default Toast;
