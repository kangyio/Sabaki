import {h, Component} from 'preact'
import classNames from 'classnames'

import i18n from '../../i18n.js'
import {noop} from '../../modules/helper.js'
import Bar from './Bar.js'

const t = i18n.context('TsumegoBar')

class TsumegoBar extends Component {
  constructor() {
    super()
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(evt) {
    let {onButtonClick = noop} = this.props
    evt.action = evt.currentTarget.dataset.id
    onButtonClick(evt)
  }

  renderButton(title, actionId, selected = false) {
    return h(
      'li',
      {class: classNames({selected})},
      h(
        'a',
        {
          title,
          href: '#',
          'data-id': actionId,
          onClick: this.handleButtonClick
        },
        h('img', {src: `./img/tsumego/${actionId}.svg`})
      )
    )
  }

  render({selectedAction}) {
    let isSelected = ([, id]) => id === selectedAction

    return h(
      Bar,
      Object.assign({type: 'tsumego'}, this.props),
      h(
        'ul',
        {},
        [
          [t('Hint'), 'hint'],
          [t('Previous Problem'), 'previous'],
          [t('Next Problem'), 'next']
        ].map(x => this.renderButton(...x, isSelected(x)))
      )
    )
  }
}

export default TsumegoBar
