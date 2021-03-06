/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import FormGroup from '../FormGroup';
import TextInput from '../TextInput';

const fieldsetCheckboxProps = {
  className: 'some-class',
  legendText: 'FormGroup heading',
};

const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text',
};

storiesOf('FormGroup', module).add('Default', () => (
  <FormGroup {...fieldsetCheckboxProps}>
    <TextInput {...TextInputProps} />
    <TextInput {...TextInputProps} />
    <TextInput {...TextInputProps} />
  </FormGroup>
));
