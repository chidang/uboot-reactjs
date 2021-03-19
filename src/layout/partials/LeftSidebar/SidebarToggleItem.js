import { AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { useContext } from 'react';

const SidebarToggleItem = ({ children, eventKey, callback, collapsed }) => {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
    const isCurrentEventKey = collapsed === 'true' || currentEventKey === eventKey;

    return (
      <a
        href
        className={ isCurrentEventKey ? 'dropdown-toggle collapsed' : 'dropdown-toggle' }
        onClick={decoratedOnClick}
      >
        {children}
      </a>
    );
}

export default SidebarToggleItem;
