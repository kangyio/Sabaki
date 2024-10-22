import {h, Component} from 'preact'

export default class AnswerOverlay extends Component {
  render({status}) {
    if (!status) return null

    const svgSrc =
      status === 'right'
        ? './img/ui/AnimationTick.svg'
        : './img/ui/AnimationCross.svg'

    const backgroundColor = 'rgba(255, 255, 255, 0.5)'

    const containerStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 100,
      width: '220px',
      height: '220px',
      backgroundColor: backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'pulse 1s ease-in-out infinite'
    }

    // Add different border radius based on status
    containerStyle.borderRadius = status === 'right' ? '50%' : '20px' // 50% for correct is circle, 20px for incorrect is square with rounded corners

    return h(
      'div',
      {style: containerStyle},
      h('img', {
        src: svgSrc,
        alt: status === 'right' ? 'Correct' : 'Incorrect',
        style: {
          width: '180px',
          height: '180px'
        }
      })
    )
  }
}
