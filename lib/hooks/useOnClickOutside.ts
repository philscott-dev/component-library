import { useEffect, useRef, RefObject, MutableRefObject } from 'react'

const events = ['mousedown', 'touchstart']

type Ref = RefObject<Element> | MutableRefObject<Element | undefined>

interface OnClickOutsideOptions {
  ref: Ref
  handler: (e: Event) => void //function to execute
  ignoreRefs?: Ref[] // ignore these if clicked
  shouldListen?: boolean //escape hatch to clear the listeners
}

export default function useOnClickOutside({
  ref,
  handler,
  ignoreRefs,
  shouldListen = true,
}: OnClickOutsideOptions) {
  const handlerRef = useRef(handler)

  // store the handler
  useEffect(() => {
    handlerRef.current = handler
  })

  useEffect(() => {
    const onClickOutside = (e: Event) => {
      //TODO: This is a hack for SVG Checkboxes and Icons
      // const tagList = ['path', 'svg', 'g']
      // const tag = e.target.tagName
      if (ref.current && !ref.current.contains(e.target as Node)) {
        // return if any of the things you click are supposed to be ignored
        if (ignoreRefs?.length) {
          for (const ignoreRef of ignoreRefs) {
            if (ignoreRef.current?.contains(e && (e.target as Node))) {
              return
            }
          }
        }
        handlerRef.current(e)
      }
    }

    events.forEach((event) =>
      document.addEventListener(event, onClickOutside, true),
    )

    if (!shouldListen) {
      events.forEach((event) =>
        document.removeEventListener(event, onClickOutside, true),
      )
    }

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, onClickOutside, true),
      )
    }
  }, [ref, handler, shouldListen, ignoreRefs])
}
