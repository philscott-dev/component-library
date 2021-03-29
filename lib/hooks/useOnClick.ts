import { useEffect, useRef, RefObject, MutableRefObject } from 'react'

const events = ['mousedown', 'touchstart']

type Ref = RefObject<Element> | MutableRefObject<Element | undefined>

interface OnClickOptions {
  ref: Ref
  handler: (e: Event) => void //function to execute
  ignoreRefs?: Ref[] // ignore these if clicked
  shouldListen?: boolean //escape hatch to clear the listeners
}

export default function useOnClick({
  ref,
  handler,
  ignoreRefs,
  shouldListen = true,
}: OnClickOptions) {
  const handlerRef = useRef(handler)

  // store the handler
  useEffect(() => {
    handlerRef.current = handler
  })

  useEffect(() => {
    const onClick = (e: any) => {
      //TODO: This is a hack for SVG Checkboxes and Icons
      // const tagList = ['path', 'svg', 'g']
      // const tag = e.target.tagName
      if (ref.current && ref.current.contains(e.target)) {
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

    events.forEach((event) => document.addEventListener(event, onClick, true))

    if (!shouldListen) {
      events.forEach((event) =>
        document.removeEventListener(event, onClick, true),
      )
    }

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, onClick, true),
      )
    }
  }, [ref, handler, shouldListen, ignoreRefs])
}
