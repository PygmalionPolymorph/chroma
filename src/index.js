import m from 'mithril';
import scope from 'kaleido';
import './style.less';
import ColorModule from './color';
import CoverUpload from './covers';

function App() {
  const color = scope('color');
  const frontcover = scope('frontcover');
  const backcover = scope('backcover');

  return {
    view: () => {
      return m('.app', [
        m('form#form', {
          action: 'http://localhost:3000',
          method: 'post',
          encType: 'multipart/form-data',
        }, [
          m(ColorModule),
          m(CoverUpload),
          m('input[type="submit"]', 'Submit'),
        ]),
      ]);
    },
  };
};

m.mount(document.querySelector('#app'), App);
