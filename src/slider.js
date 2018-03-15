import m from 'mithril';

export default function Slider() {
  return {
    view: (vnode) => {
      return m('label', [
        m('span', vnode.attrs.label),
        m('input', {
          type: 'range',
          name: vnode.attrs.name.toLowerCase(),
          min: 0,
          max: vnode.attrs.max,
          value: vnode.attrs.value,
          oninput: vnode.attrs.oninput,
        }),
      ]);
    }
  }
}
