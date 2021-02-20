import { AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { useContext } from 'react';

export const  LeftSidebarItemToggle = ({ children, eventKey, callback, collapsed }) => {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
    const isCurrentEventKey = collapsed === 'true' || currentEventKey === eventKey;
  
    return (
      <a
        className={ isCurrentEventKey ? 'dropdown-toggle collapsed' : 'dropdown-toggle aaa' }
        onClick={decoratedOnClick}
      >
        {children}
      </a>
    );
}