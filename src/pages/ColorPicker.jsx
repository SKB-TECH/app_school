import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const changeCoor = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const ColorPicker = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Picker Color" />
    <div className="text-center">
      <div id="preview" />
      <div className="flex flex-warp justify-center items-center gap-20">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Pallette des Couleurs</p>
          <ColorPickerComponent
            id="inline-palette"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={changeCoor}
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Couleurs Picker</p>
          <ColorPickerComponent
            id="inline-palette"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={changeCoor}
          />
        </div>
      </div>
    </div>
  </div>

);

export default ColorPicker;
