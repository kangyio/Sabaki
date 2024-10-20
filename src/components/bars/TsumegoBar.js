import {h, Component} from 'preact'
import Bar from './Bar.js'
import i18n from '../../i18n.js'

const t = i18n.context('TsumegoBar')

class TsumegoBar extends Component {
  render(props) {
    return h(
      Bar,
      Object.assign({type: 'tsumego'}, props),
      t('Click on the board to solve the tsumego problem.')
    )
  }
}

export default TsumegoBar
