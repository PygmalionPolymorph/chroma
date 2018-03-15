import m from 'mithril';
import scope from 'kaleido';

export default function CoverUpload() {
  const frontcover = scope('frontcover');
  const backcover = scope('backcover');

  return {
    view: () => {
      return m('.covers', [
        m('label', [m('span', 'Front Cover'),
          m('input', {
            type: 'file',
            id: 'front',
            name: 'front',
            onchange: (e) => frontcover.set(e.target.files[0]),
          }),
        ]),
        m('label', [m('span', 'Back Cover'),
          m('input', {
            type: 'file',
            id: 'back',
            name: 'back',
            onchange: (e) => backcover.set(e.target.files[0]),
          }),
        ]),
      ]);
    },
  };
};
