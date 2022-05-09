import {useRef, useState} from 'react'
import ReactTooltip from 'react-tooltip'
import {CopyToClipboard as Clipboard} from 'react-copy-to-clipboard/lib/Component'

const CopyToClipboard = (props) => {
    const {
        type = 'tooltip',
        copyText,
        successText,
        defaultText = 'Copy',
        children
    } = props

    const [text, setText] = useState(defaultText)
    const tooltipRef = useRef()

    const handleOnCopyWithTooltip = () => {
        setText(successText)
        ReactTooltip.hide(tooltipRef.current)
        setTimeout(() => ReactTooltip.show(tooltipRef.current))

        setTimeout(() => {
            setText(defaultText)
            ReactTooltip.hide(tooltipRef.current)
        }, 800)
    }

     const handleOnCopy = () => {
        setText(successText)
        ReactTooltip.hide(tooltipRef.current)
        setTimeout(() => ReactTooltip.show(tooltipRef.current))

        setTimeout(() => {
            setText(defaultText)
            ReactTooltip.hide(tooltipRef.current)
        }, 800)
    }

    return (
        <>
            {type === 'tooltip' ? (
                <Clipboard onCopy={handleOnCopyWithTooltip} text={copyText}>
                    <div data-tip={text} ref={tooltipRef} data-effect='solid'>
                        {children}
                    </div>
                </Clipboard>
            ) : (
                <Clipboard onCopy={handleOnCopy} text={copyText}>
                    <div>
                        {children}
                    </div>
                </Clipboard>
            )}

            <ReactTooltip />
        </>
    )
}

export default CopyToClipboard