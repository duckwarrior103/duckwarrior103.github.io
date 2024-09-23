import Transition from "react-transition-group/cjs/Transition";
import { useRef, useEffect, useState} from "react";

const duration = 1000;

const transitionStyles = {
    entering: 'opacity-100',
    entered: 'opacity-100',
    exiting: 'opacity-0',
    exited: 'opacity-0',
  };

export default function About() {
    const nodeRef = useRef(null);
    const [inProp, setInProp] = useState(false);
    useEffect(() => {
        setInProp(true);
      }, []);
    return (
        // <>

        // </>
        <>
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        {state => (
          <div 
            ref={nodeRef} 
            className={`transition-opacity duration-1000 ease-in-out ${transitionStyles[state]}`}>
                    <div className="px-5 py-9">
            <div className="mockup-code">
            <pre data-prefix="$"><code>npm i daisyui</code></pre>
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            </div>
        </div>
          </div>
        )}
      </Transition>
        </>
        
    );
}