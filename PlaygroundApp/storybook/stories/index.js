import React from 'react'
import { Text } from 'react-native'

import { storiesOf, addDecorator } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import CenterView from './CenterView'

import InputButton from '../../src/components/InputButton'
import withLongPressZoom from '../../src/components/withLongPressZoom'

const InputButtonZoom = withLongPressZoom(InputButton)


addDecorator(withKnobs)

storiesOf('InputButton', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('regular', () => (
  <InputButton
    value={3}
    inverted={boolean('inverted', false)}
    onPress={action('button clicked')}
    onLongPress={action('button clicked looong')}
  />
))

storiesOf('InputButtonZoom', module)
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('regular', () => (
  <InputButtonZoom
    value={3}
    inverted={boolean('inverted', false)}
    onPress={action('button clicked')}
    onLongPress={boolean('has long press', true) ? action('button clicked looong') : undefined}
  />
))
