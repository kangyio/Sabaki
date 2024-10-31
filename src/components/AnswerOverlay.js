import {h, Component} from 'preact'

export default class AnswerOverlay extends Component {
  render({status}) {
    if (!status) return null

    const svgSrc =
      status === 'right'
        ? `./img/ui/AnimationTick.svg`
        : `./img/ui/AnimationCross.svg`

    const message =
      status === 'right' ? 'Great job, keep going' : "Uh-oh, it's wrong"

    // Nice shade of blue for right answer, nice shade of orange for wrong answer
    const color = status === 'right' ? '#3498db' : '#ffb01d'

    const ribbonStyle = {
      position: 'absolute',
      top: '50%',
      left: '0',
      right: '0',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 20px',
      zIndex: 100
    }

    const contentStyle = {
      display: 'flex',
      alignItems: 'center'
    }

    const textStyle = {
      marginLeft: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: color
    }

    return h(
      'div',
      {style: ribbonStyle},
      h(
        'div',
        {style: contentStyle},
        h('img', {
          src: svgSrc,
          alt: status === 'right' ? 'Correct' : 'Incorrect',
          style: {
            width: '50px',
            height: '50px'
          }
        }),
        h('span', {style: textStyle}, message)
      )
    )
  }
}
