import m from 'mithril';
import { stream } from 'flyd';
import tinycolor from 'tinycolor2';
import scope from 'kaleido';

import Slider from './slider';

export default function ColorModule(vnode) {
  const color = scope('color', tinycolor('rgb 0 0 0'));

  const changeSaturation = (e) => {
    color.set(tinycolor(`hsl ${color.get().toHsl()['h']} ${parseInt(e.target.value)} ${color.get().toHsl()['l']}`));
  }

  const changeLightness = (e) => {
    color.set(tinycolor(`hsl ${color.get().toHsl()['h']} ${color.get().toHsl()['s']} ${parseInt(e.target.value)}`));
  }

  const changeRed = (e) => {
    color.set(tinycolor(`rgb ${parseInt(e.target.value)} ${color.get().toRgb()['g']} ${color.get().toRgb()['b']}`));
  }

  const changeGreen = (e) => {
    color.set(tinycolor(`rgb ${color.get().toRgb()['r']} ${parseInt(e.target.value)} ${color.get().toRgb()['b']}`));
  }

  const changeBlue = (e) => {
    color.set(tinycolor(`rgb ${color.get().toRgb()['r']} ${color.get().toRgb()['g']} ${parseInt(e.target.value)}`));
  }

  return {
    view: () => {
      return m('.color', [
        m('.controls', [
          m(Slider, {
            label: 'Rock',
            name: 'r',
            max: 255,
            value: color.get().toRgb()['r'],
            oninput: changeRed,
          }),
          m(Slider, {
            label: 'Acoustic',
            name: 'g',
            max: 255,
            value: color.get().toRgb()['g'],
            oninput: changeGreen,
          }),
          m(Slider, {
            label: 'Electronic',
            name: 'b',
            max: 255,
            value: color.get().toRgb()['b'],
            oninput: changeBlue,
          }),
          m(Slider, {
            label: 'Hardness',
            name: 'l',
            max: 100,
            value: color.get().toHsl()['l'] * 100,
            oninput: changeLightness,
          }),
          m(Slider, {
            label: 'Complexity',
            name: 's',
            max: 100,
            value: color.get().toHsl()['s'] * 100,
            oninput: changeSaturation
          }),
        ]),
        m('.color-preview', {
          style: `background-color: ${color.get().toHexString()}`,
        }),
      ]);
    }
  }
};
