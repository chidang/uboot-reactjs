import { AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { useContext } from 'react';

export const  LeftSidebarItemToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <a
        className={ isCurrentEventKey ? 'dropdown-toggle collapsed' : 'dropdown-toggle' }
        onClick={decoratedOnClick}
      >
        {children}
      </a>
    );
}