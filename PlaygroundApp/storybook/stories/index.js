import React from 'react'
import { Text } from 'react-native'

import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import CenterView from './CenterView'

import InputButton from '../../src/components/InputButton'

const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)


stories
.addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
.add('regular', () => (
  <InputButton
    value={3}
    inverted={boolean('inverted', false)}
    onPress={action('button clicked')}
  />
))
